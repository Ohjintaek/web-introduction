document.getElementById("register").addEventListener("click", alertToVisitor);
document.getElementById("reset").addEventListener("click", resetVisitor);

function isCheckedCount() {
    const query = 'input[name="movie"]:checked';
    const selectedElements = document.querySelectorAll(query);

    const selectedElementsCount = selectedElements.length;
}

function alertToVisitor() {
    var visitorName = document.getElementById("visitorName");
    const query = 'input[name="movie"]:checked';
    const selectedElements = document.querySelectorAll(query);

    const selectedElementsCount = selectedElements.length;

    if(visitorName.value.length != 0) {
        alert(visitorName.value + "님, 저와 " + selectedElementsCount + "개의 취향이 같으시네요!");
        visitorName.value = null;
    }
    else {
        alert("이름을 입력해주세요.");
    }

    resetVisitor();
}

function resetVisitor() {
    var visitorName = document.getElementById("visitorName");
    const checkboxes = document.getElementsByName("movie");

    visitorName.value = null;
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    })
}