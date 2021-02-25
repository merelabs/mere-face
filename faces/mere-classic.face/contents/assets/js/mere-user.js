var userGrabber = MereConnect.Components.get("user/msIUser");

function initUser()
{
    getUser();
}

function getUser()
{
    userGrabber.initWithUsername("iklash");
    userGrabber.getProfile(function(profile)
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


