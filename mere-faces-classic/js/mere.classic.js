function search(event, value)
{
    if(event.keyCode === 13)
    {
        runProgramByName(value);
        return false;
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

function getUser()
{
    var user = MereConnect.Components.get("user/msIUser");
    user.initWithUsername("iklash");

    user.getProfile(function(profile)
    {
        var name = profile["fullname"];
        if (name)
        {
            var element = document.getElementById("userFullname");
            if (element)
            {
                element.innerHTML = profile["fullname"];
            }
        }
    });
}



getUser()