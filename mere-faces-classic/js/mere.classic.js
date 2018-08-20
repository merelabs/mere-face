function search(event, value)
{
    if(event.keyCode === 13)
    {
        runProgramByName(value);
       

        return false;
    }
        getUser();
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

    user.profile(function(p){
      alert("1...Profile" + p)
      alert("2...Profile" + p.getFullname())
      alert("2...Profile" + p.getFullname(function(name){alert("?" + name)}))
    });
}
