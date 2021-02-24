var appFinder = MereConnect.Components.get("system/msIAppFinder");
var numberOfApplicationsToShow = 7;
var foundApplications = [];

function findApp(str)
{
    appFinder.find(str, numberOfApplicationsToShow, function(result)
    {
        clear();

        foundApplications = result["apps"];

        var apps = result["apps"];
        if(apps.length > 0)
            renderApps(apps);

        var processConsole = document.getElementById("mere-app-finder-process-console");
        var totalAppsFound = result["found"];
        var totalTimeTook  = (parseInt(result["etime"]) - parseInt(result["stime"]))/ 1000;
        processConsole.innerText = "Total " + totalAppsFound + (totalAppsFound > 1 ? " appliactions" : " appliaction") + " found in " + totalTimeTook + "s";
    });
}

function renderApps(apps)
{
    var container = document.getElementById("mere-app-finder-container");

    var loop = apps.length >= numberOfApplicationsToShow ? numberOfApplicationsToShow : apps.length;
    for(var i = 0; i < loop; i++ )
    {
        renderApp(container, apps[i]);
    }
}

function renderApp(container, app)
{
    var template =
        '<div class="mere-app-finder-app" ondblclick="runProgramByName(\''+ app["exec"] +'\')">' +
        '  <img class="mere-app-finder-app-icon" src="' + (app["icon"]||"http://goo.gl/vyAs27") + '">' +
        '  <div class="mere-app-finder-app-name">' + app["name"] + '</div>' +
        '</div>';

    container.insertAdjacentHTML('beforeend', template);
}

function clear()
{
    foundApplications.length = 0;

    var container = document.getElementById("mere-app-finder-container");

    while (container.hasChildNodes())
    {
        container.removeChild(container.lastChild);
    }
}


function runApp(appNo)
{
    if(appNo != NaN && appNo > 0 && appNo <= numberOfApplicationsToShow)
    {
        var app = foundApplications[appNo-1];
        runProgramByName(app["exec"]);
        return true;
    }

    return false;
}
