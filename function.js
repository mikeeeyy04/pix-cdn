document.getElementById('btnConfig1').addEventListener('click', function () {
    toggleForgeConfig('forgeConfig1');
});

document.getElementById('btnConfig2').addEventListener('click', function () {
    toggleForgeConfig('forgeConfig2');
});

document.getElementById('btnConfig3').addEventListener('click', function () {
    toggleForgeConfig('forgeConfig3');
});


var forgeConfigs = [
    { id: 'forgeConfig1', btnId: 'btnConfig1' },
    { id: 'forgeConfig2', btnId: 'btnConfig2' },
    { id: 'forgeConfig3', btnId: 'btnConfig3' }
];

function toggleForgeConfig(id) {
    forgeConfigs.forEach(config => {
        var configElement = document.getElementById(config.id);
        var btnElement = document.getElementById(config.btnId);
        if (config.id === id) {
            configElement.style.display = configElement.style.display === 'none' ? 'block' : 'none';
            btnElement.style.backgroundColor = configElement.style.display === 'none' ? '#052112' : '#078d10';
        } else {
            configElement.style.display = 'none';
            btnElement.style.backgroundColor = '#052112';
        }
    });
}

document.addEventListener('click', function (event) {
    var forgeConfig1 = document.getElementById('forgeConfig1');
    var forgeConfig2 = document.getElementById('forgeConfig2');
    var forgeConfig3 = document.getElementById('forgeConfig3');
    var configBtn = document.getElementById('configBtn');
    var btnConfig1 = document.getElementById('btnConfig1');
    var btnConfig2 = document.getElementById('btnConfig2');
    var btnConfig3 = document.getElementById('btnConfig3');
    if (!forgeConfig1.contains(event.target) && !forgeConfig2.contains(event.target) && !forgeConfig3.contains(event.target) && !configBtn.contains(event.target)) {
        forgeConfig1.style.display = 'none';
        forgeConfig2.style.display = 'none';
        forgeConfig3.style.display = 'none';
        btnConfig1.style.backgroundColor = '#052112';
        btnConfig2.style.backgroundColor = '#052112';
        btnConfig3.style.backgroundColor = '#052112';
    }
});




function saveCheckboxState(id) {
    var checkbox = document.getElementById(id);
    localStorage.setItem(id, checkbox.checked);
    console.log('Saved ' + id + ': ' + checkbox.checked);
}


function loadCheckboxState(id) {
    var checkbox = document.getElementById(id);
    var checked = localStorage.getItem(id) === 'true';
    checkbox.checked = checked;
    console.log('Loaded ' + id + ': ' + checked);
}


var checkboxIds = ['longRange', 'easyTeleport', 'speedHack', 'noCollision'];


checkboxIds.forEach(function (id) {
    var checkbox = document.getElementById(id);
    checkbox.addEventListener('change', function () {
        saveCheckboxState(id);
    });

    loadCheckboxState(id);
});


let autoClickEnabled = false;
let autoClickInterval = 1000; // Default interval in milliseconds
let autoClickIntervalId = null;

document.addEventListener('keydown', (event) => {
    if (event.key === 'F1') {
        event.preventDefault();
        toggleAutoClick();
    } else if (event.key === 'F2') {
        event.preventDefault();
        stopAutoClick();
    }
});

function toggleAutoClick() {
    autoClickEnabled = !autoClickEnabled;
    document.getElementById('autoClickStatus').innerText = autoClickEnabled ? 'Auto-Click Enabled' : 'Auto-Click Disabled';
    document.getElementById('startClickBtn').innerText = autoClickEnabled ? 'Stop Auto-Click' : 'Start Auto-Click';
    document.getElementById('startClickBtn').classList.toggle('enabled', autoClickEnabled);
    if (autoClickEnabled) {
        startAutoClick();
    } else {
        stopAutoClick();
    }
}

function updateAutoClickInterval() {
    autoClickInterval = parseInt(document.getElementById('autoClickSlider').value);
    document.getElementById('autoClickIntervalValue').innerText = autoClickInterval.toString();
    if (autoClickEnabled) {
        stopAutoClick();
        startAutoClick();
    }
}

function isElementWithinForgeTool(element) {
    while (element) {
        if (element.classList && element.classList.contains('forgeTool')) {
            return true;
        }
        element = element.parentElement;
    }
    return false;
}

function startAutoClick() {
    autoClickIntervalId = setInterval(() => {
        const mouseEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: lastMousePos.x,
            clientY: lastMousePos.y
        });
        document.documentElement.dispatchEvent(mouseEvent);
        console.log('Auto-clicked at:', { x: lastMousePos.x, y: lastMousePos.y });
    }, autoClickInterval);
}

function stopAutoClick() {
    clearInterval(autoClickIntervalId);
}

let lastMousePos = { x: 0, y: 0 };
document.addEventListener('mousemove', (event) => {
    lastMousePos.x = event.clientX;
    lastMousePos.y = event.clientY;
});
