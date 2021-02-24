function initFace()
{
    startClock();
    initUser();
}


function search(event, value)
{
    if(event.keyCode === 13)
    {
        runProgramByName(value);
        return false;
    }
    else if(event.ctrlKey)
    {
        var appNo = 0;
        if (event.keyCode >= 48 && event.keyCode <= 57)
            appNo = event.keyCode - 48;
        else if (event.keyCode >= 96 && event.keyCode <= 105)
            appNo = event.keyCode - 96;

        runApp(appNo)
    }
    else
    {
        findApp(value);
    }

    return true;
}


function runProgramByName(name)
{
    var processStarter = MereConnect.Components.get("system/msIProcessStarter");
    processStarter.initWithName(name);
    processStarter.start();
}


function runProgramByPath(path)
{
    var processStarter = MereConnect.Components.get("system/msIProcessStarter");
    processStarter.initWithPath(path);
    processStarter.start();
}

