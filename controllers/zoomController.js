const axios = require('axios');
const body = {
    "topic": "test 5",
    "type": 2,
    "start_time": "2023-01-18T12:10:10Z",
    "duration": "3",
    "settings": {
        "host_video": true,
        "participant_video": true,
        "join_before_host": true,
        "mute_upon_entry": "true",
        "watermark": "true",
        "audio": "voip",
        "auto_recording": "cloud"
    }
}
const ZOOM_AUTH = "Bearer eyJhbGciOiJIUzUxMiIsInYiOiIyLjAiLCJraWQiOiJmOWY0MjUyYi1lOWZhLTQzNDMtYjkxNi0zZDU2ZTZiNzAwOWQifQ.eyJ2ZXIiOjgsImF1aWQiOiI5OWY3OWY1MTU3ZGJiNTBmOTYyOGZkYTgyYTdjM2I3YSIsImNvZGUiOiJGWXJHSjZwbFBlbFNkWXk3ZFRJUW5POXBMRzF6bkR5NmciLCJpc3MiOiJ6bTpjaWQ6R1Q4X2FJNUtTNm1QaGRMMXNSNUNPZyIsImdubyI6MCwidHlwZSI6MCwidGlkIjozLCJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiI2TGxld0dFQVJHaW9DYmFIUUlKajZBIiwibmJmIjoxNjc2MDQyODc2LCJleHAiOjE2NzYwNDY0NzYsImlhdCI6MTY3NjA0Mjg3NiwiYWlkIjoicDI2Y2dKcHhRdWFxU1VDemg4MEFnZyIsImp0aSI6IjljZGQ1NjI2LTU3ZTYtNGQ1Mi1iMzg2LTRjN2FmZTk2MDFkMiJ9.aCxG0MTq2EKjWMbWA5B6m5ZMT2rxPvm6RyEhueeeCEHDTB7oyszL6wIdhkWCP_j_z6jn6D_hymrTm6hgVi1G2Q"
const ZOOM_COOKIE = "TS018dd1ba=01e2d6a4a1d7f5c1f4e554145543ad13452b3a77dc7cef620c8a2fa31f780d37c866ed37c4c38a4feba919fe47198f8e41eb03bd4e; __cf_bm=xYe7Re1Fth332sWTVEecbUufhUl3pshakoRevGYWX6I-1676042876-0-ARYwkuYWvN2gKUDUjj5BvP7LaLLc3IX5CBcrCg4Yn+6SH/G4kRsYebD/mXjZP7HxL1FTaNkBScHTJTsN2SDMCk0=; _zm_mtk_guid=95e11faf0cbf49febe46cb6f2efd738a; _zm_page_auth=us05_c_Mni5SIirQ4CDQmvxUK6qFw; _zm_ssid=us05_c_WOYA_tRTQle6pha4Zh_p4w; TS01f92dc5=01e2d6a4a1d7f5c1f4e554145543ad13452b3a77dc7cef620c8a2fa31f780d37c866ed37c4c38a4feba919fe47198f8e41eb03bd4e; cred=6C35AF74763FF70FD65A464C2DD013A8"
const createZoomMeeting = async (req, res) => {
    const meeting = await axios.post(process.env.ZOOM_API, {
        Headers: {
            Authorization: ZOOM_AUTH,
            Cookie: ZOOM_COOKIE
        },
        body: body
    }).catch((err) => {
        console.log(err)
    });
    console.log(meeting);
    res.send(meeting);
}
module.exports = {
    createZoomMeeting
}