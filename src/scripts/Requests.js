import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(requests => { 
                    return `<li> ${requests.description}</li>` 
                }).join("")
            }
        </ul>
    `

    return html
}