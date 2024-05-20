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

