export function goToHomePage(navigate){
    navigate("/")
}

export function goToListTripsPage(navigate){
    navigate("/trips/list")
}

export function goToApplicationFormPage(navigate){
    navigate("/trips/application")
}

export function goToLoginPage(navigate){
    navigate("/login")
}

export function goToAdminHomePage(navigate){
    navigate("/admin/trips/list")
}

export function goToCreateTripPage(navigate){
    navigate("/admin/trips/create")
}

export function goToTripDetailsPage(navigate){
    navigate("/admin/trips/:id")
}