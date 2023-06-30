
const options = [
    {value: "bookedDemos", label: "Demo Booked"},
    {value: "completedDemos", label: "Demo Completed"},
    {value: "pricingCall", label: "Pricing Call Booked"},
    {value: "pricingCallCompleted", label: "Pricing Call Completed"},
    {value: "jumpStart", label: "Jump Start Booked"},
    {value: "jumpStartCompleted", label: "Jump Start Completed"},
    {value: "closedDeal", label: "Closed Deal"}
]

function ListOptions({prospect, localStorageDataName}) {
    const isSelected = (value) => {
        if (value === localStorageDataName) {
            return true
        } else {return false}
    }
    let currentArray = JSON.parse(localStorage.getItem(localStorageDataName))
    let newOptions = options.map(option => 
        <option value={option.value} selected={isSelected(option.value)}>{option.label}</option>
    )
    const changeStatus = (event) => {
        if (event.target.value === "bookedDemos"){
            let bookedDemosArray = JSON.parse(localStorage.getItem("bookedDemos"))
            bookedDemosArray.push(prospect)
            localStorage.setItem("bookedDemos", JSON.stringify(bookedDemosArray))
            const newCurrentArray = currentArray.filter(
                (company) => company.id !== prospect.id
            )
            localStorage.setItem(localStorageDataName, JSON.stringify(newCurrentArray))
            window.location.reload(true)
        } else if (event.target.value === "completedDemos"){
            let completedDemosArray = JSON.parse(localStorage.getItem("completedDemos"))
            completedDemosArray.push(prospect)
            localStorage.setItem("completedDemos", JSON.stringify(completedDemosArray))
            const newCurrentArray = currentArray.filter(
                (company) => company.id !== prospect.id
            )
            localStorage.setItem(localStorageDataName, JSON.stringify(newCurrentArray))
            window.location.reload(true)
        } else if (event.target.value === "pricingCall"){
            let pricingCallArray = JSON.parse(localStorage.getItem("pricingCall"))
            pricingCallArray.push(prospect)
            localStorage.setItem("pricingCall", JSON.stringify(pricingCallArray))
            const newCurrentArray = currentArray.filter(
                (company) => company.id !== prospect.id
            )
            localStorage.setItem(localStorageDataName, JSON.stringify(newCurrentArray))
            window.location.reload(true)
        } else if (event.target.value === "pricingCallCompleted"){
            let pricingCallCompletedArray = JSON.parse(localStorage.getItem("pricingCallCompleted"))
            pricingCallCompletedArray.push(prospect)
            localStorage.setItem("pricingCallCompleted", JSON.stringify(pricingCallCompletedArray))
            const newCurrentArray = currentArray.filter(
                (company) => company.id !== prospect.id
            )
            localStorage.setItem(localStorageDataName, JSON.stringify(newCurrentArray))
            window.location.reload(true)
        } else if (event.target.value === "jumpStart"){
            let jumpStartArray = JSON.parse(localStorage.getItem("jumpStart"))
            jumpStartArray.push(prospect)
            localStorage.setItem("jumpStart", JSON.stringify(jumpStartArray))
            const newCurrentArray = currentArray.filter(
                (company) => company.id !== prospect.id
            )
            localStorage.setItem(localStorageDataName, JSON.stringify(newCurrentArray))
            window.location.reload(true)
        } else if (event.target.value === "jumpStartCompleted"){
            let jumpStartCompletedArray = JSON.parse(localStorage.getItem("jumpStartCompleted"))
            jumpStartCompletedArray.push(prospect)
            localStorage.setItem("jumpStartCompleted", JSON.stringify(jumpStartCompletedArray))
            const newCurrentArray = currentArray.filter(
                (company) => company.id !== prospect.id
            )
            localStorage.setItem(localStorageDataName, JSON.stringify(newCurrentArray))
            window.location.reload(true)
        } else if (event.target.value === "closedDeal"){
            let closedDealArray = JSON.parse(localStorage.getItem("closedDeal"))
            closedDealArray.push(prospect)
            localStorage.setItem("closedDeal", JSON.stringify(closedDealArray))
            const newCurrentArray = currentArray.filter(
                (company) => company.id !== prospect.id
            )
            localStorage.setItem(localStorageDataName, JSON.stringify(newCurrentArray))
            window.location.reload(true)
        }
    }
    
    return(
        <select className="status-select" onChange={changeStatus} >{newOptions}</select>
    )
}


export default ListOptions