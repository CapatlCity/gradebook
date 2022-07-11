let assignmentArray = []

const filters = {
    searchText: ""
}

// search for existing saved data in local storage
const listJSON = localStorage.getItem("assignmentAdd")

if (listJSON !== null) {
    list = JSON.parse(listJSON)

}
}
 const renderList = function (assignmentArray, filters) {
    const filteredList = assignmentArray.filter(function (assignmentArray) {
            return assignmentArray
    })
    document.querySelector("#assignmentName").innerHTML = ""

    filteredList.forEach(function (assignmentArray) {
        const newAssign = document.createElement("ul")

        if (assignmentArray.)
        // 11:07 in L8
    })
 }