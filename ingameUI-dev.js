window.pf.ui.hi = () => {
  console.log("UI 1NJ3K7ED");
}

window.toggleForgeUI = () => {
  let uiDiv = document.getElementById('forgeConfig')
  uiDiv.style.display = uiDiv.style.display === 'none' ? 'block' : 'none';
}

const init = async () => {
  const _uidiv = await ShowUI();
  document.body.appendChild(_uidiv);

  let uiDiv = document.getElementById('forgeConfig')
  console.log("ovovoov", uiDiv)
  uiDiv.style.position = 'fixed';
  uiDiv.style.bottom = "80px";
  uiDiv.style.left = "25px";
  uiDiv.style.zIndex = 1000; 
  document.body.appendChild(uiDiv);

  var longRangeCheckbox = document.getElementById('longRange');
  var easyTeleportCheckbox = document.getElementById('easyTeleport');
  var noCollisionCheckbox = document.getElementById('noCollision');
  var speedHackCheckbox = document.getElementById('speedHack');
  var autoChopTreesCheckbox = document.getElementById('autoChopTrees');

  window.forgeLongRange = longRangeCheckbox.checked;
  window.forgeEasyTeleport = easyTeleportCheckbox.checked;
  window.forgeNoCollision = noCollisionCheckbox.checked;
  window.forgeSpeedHack = speedHackCheckbox.checked;
  //window.forgeAutoChopTrees = autoChopTreesCheckbox.checked;

  longRangeCheckbox.onclick = function() {
    window.forgeLongRange = this.checked;
  };
  
  easyTeleportCheckbox.onclick = function() {
    window.forgeEasyTeleport = this.checked;
  };
  
  noCollisionCheckbox.onclick = function() {
    window.forgeNoCollision = this.checked;
  };
  
  speedHackCheckbox.onclick = function() {
    window.forgeSpeedHack = this.checked;
  };
  
  /*
  autoChopTreesCheckbox.onclick = function() {
    window.forgeAutoChopTrees = this.checked;
  };*/

}



const ShowUI = async () => {

  let div = document.createElement('div');

  let script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/gh/mikeeeyy04/pix-cdn@main/script.js";

  document.head.appendChild(script);


  div.innerHTML = /*html*/`

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mikeeeyy04/pix-cdn@main/styles.css">

  <div class="pfbtn">
    <button class="Btn" onclick="toggleForgeConfig()" id="showBtn">        
        <img src="https://github.com/mikeeeyy04/pix-cdn/blob/main/pficon.png?raw=true" alt="Pixels Forge" width="130%">
        <span class="tooltip">Pixels Forge</span>
     </button>
    </div>

    <div class="forgeConfig" id="forgeConfig">
        <div class="drag" id="dragBtn">
        <button class="drag-button"><img src="https://github.com/mikeeeyy04/pix-cdn/blob/main/drag.png?raw=true" alt="Drag" ></button>
        </div>
        <div class="logo">
        <img src="https://github.com/mikeeeyy04/pix-cdn/blob/main/pficon.png?raw=true" alt="Pixels Forge">
        <h1 class="pftitle">Pixels Forge</h1>
        </div>
        <hr width="70%" style="margin-top: 20px;">
        <!-- <h1 style=" font-size: 24px; margin-bottom: 16px;">Configuration</h1> -->
  
        <div style="margin-bottom: 26px;">
          <!-- <input type="checkbox" id="longRange" style="margin-right: 8px;">
          <label for="longRange" style=" font-size: 16px;">Long range click</label><br>
          
          <input type="checkbox" id="easyTeleport" style="margin-right: 8px;">
          <label for="easyTeleport" style=" font-size: 16px;">Easy teleport</label><br>
          
          <br>
          <p style="font-size: 14px; color: #666;">Enable the following options before starting the game:</p>
          <input type="checkbox" id="noCollision" style="margin-right: 8px;">
          <label for="noCollision" style=" font-size: 16px;">No collisions <span style="font-size: 12px; color: #999;">(game reload required)</span></label><br>
          
          <input type="checkbox" id="speedHack" style="margin-right: 8px;">
          <label for="speedHack" style="font-size: 16px;">Speed Hack <span style="font-size: 12px; color: #999;">(game reload required)</span></label><br> -->

          <fieldset class="checkbox-group">
            <legend class="checkbox-group-legend">Configurations</legend>
            <div class="checkbox">
                <label class="checkbox-wrapper">
                    <input type="checkbox" class="checkbox-input" id="longRange" />
                    <span class="checkbox-tile">
                        <span class="checkbox-icon">
                            <img src="https://github.com/mikeeeyy04/pix-cdn/blob/main/tree.png?raw=true">
                        </span>
                        <span class="checkbox-label">Long Range</span>
                    </span>
                </label>
            </div>
            <div class="checkbox">
                <label class="checkbox-wrapper">
                    <input type="checkbox" class="checkbox-input" id="easyTeleport"/>
                    <span class="checkbox-tile">
                        <span class="checkbox-icon">
                            <img src="https://github.com/mikeeeyy04/pix-cdn/blob/main/infiniportal.png?raw=true">
                        </span>
                        <span class="checkbox-label" style="margin-top: 10px;">Easy Teleport</span>
                    </span>
                </label>
            </div>
            <div class="checkbox">
                <label class="checkbox-wrapper">
                    <input type="checkbox" class="checkbox-input" id="speedHack"/>
                    <span class="checkbox-tile">
                        <span class="checkbox-icon">
                            <img src="https://github.com/mikeeeyy04/pix-cdn/blob/main/speed.png?raw=true" style="background-color: transparent;">
                        </span>
                        <span class="checkbox-label">Speed Hack</span>
                        <span class="checkbox-note">Reload Required</span>
                    </span>
                </label>
            </div>
            <div class="checkbox">
                <label class="checkbox-wrapper">
                    <input type="checkbox" class="checkbox-input" id="noCollision"/>
                    <span class="checkbox-tile">
                        <span class="checkbox-icon">
                            <img src="https://github.com/mikeeeyy04/pix-cdn/blob/main/nocollision.png?raw=true">
                        </span>
                        <span class="checkbox-label">No Collision</span>
                        <span class="checkbox-note">Reload Required</span>
                    </span>
                </label>
            </div>

        </fieldset>
          
        <div class="footer">
            <hr width="70%">
            <p class="pftitle">Thank you for using</br> Pixels Forge <3</p>
            </a>
        </div>

        </div>
          
    </div>
        
    `;
    return div;

}

init()
