import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeesId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeesId)) {
                    const count = orderAmount(parseInt(employeesId))
                    window.alert(`${employee.name} sold ${count}`)
                }
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

//create a function whose purpose is to see how many orders an employee places

export const orderAmount = (employeeId) => {
    let counter = 0
    for (const order of orders) {
        if (order.employeeId === employeeId) {
            counter ++
        }
    }
    return counter
}

