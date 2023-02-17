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
        alert(visitorName.value + "��, ���� " + selectedElementsCount + "���� ������ �����ó׿�!");
        visitorName.value = null;
    }
    else {
        alert("�̸��� �Է����ּ���.");
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