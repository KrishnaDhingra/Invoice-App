import generateId from "./generateId"

const updateData = (status, streetAddress, city, postCode, country, clientName, clientEmail, clientStreetAddress, clientcity, clientpostCode, clientcountry, invoiceDate, paymentDate, description) => {

    let id = generateId()

    const newData = 
        {
            id: id,
            status: status,
            total: '$725',
    
            billFrom:{
                streeetAddress: streetAddress,
                city: city,
                postCode: postCode,
                country: country
            },
            billTo:{
                clientName: clientName,
                clientEmail: clientEmail,
                streeetAddress: clientStreetAddress,
                city: clientcity,
                postCode: clientpostCode,
                country: clientcountry,
                invoiceDate: invoiceDate,
                paymentDate: paymentDate,
                description: description
           },
           items:{
               itemName: '',
               quantity: '',
               price: ''
           }
    }
    
    let prevData = JSON.parse(localStorage.getItem("data1")) ? JSON.parse(localStorage.getItem("data1")) : []

    prevData.push(newData)

    localStorage.setItem("data1", JSON.stringify(prevData))
}
export default updateData