import React,{ useState } from 'react';

const Stories = () => {
    const [state, setState] = useState([
        {id:1, image: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/85118448_907005339702602_8111936132461101056_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lYSCR7zxHjsAX-a8Xte&_nc_ht=scontent.fccu3-1.fna&oh=b991b0e2e734aeaf282e26d6012471e2&oe=60DF8173" , name: "Deepika"},
        {id:2, image: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.18169-9/13265982_596953143798585_3990996559294730947_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=fwEnAYvYah8AX9Yju0V&_nc_oc=AQkdvPjyhem5sgZ4yyGl2hcwVWEw_qL8eQZjjUD6S6UqokHQD49nkhmUTxQRqg11hEM&_nc_ht=scontent.fccu3-1.fna&oh=624f5602de7fbd3b0a0c5688e3115639&oe=60E0BB06" , name: "Parash"},
        {id:3, image: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/209268236_2036959103119775_4282816568970006389_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=bbZ5KOZ97k4AX-wUv76&_nc_ht=scontent.fccu3-1.fna&oh=8a6dc05cd121545729cddc83d83f931b&oe=60E081A2" , name: "Vivek"},
        {id:4, image: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.18169-9/20597470_1839905192991684_1253854138367565348_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=f-reUhxVTk0AX9AJjT7&tn=RH7IBuH3ipKbGC-t&_nc_ht=scontent.fccu3-1.fna&oh=ed7e38c0b42077c70fe3f4276a14fb0f&oe=60E1440D" , name: "Rajnish"},
        {id:5, image: "https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/23511496_1909992775930900_432984538226934886_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=L2YhClJv2pMAX9wuvh4&_nc_ht=scontent.fccu3-1.fna&oh=e397b86e4716e9484c6d917ed4c289e1&oe=60E120F7" , name: "Utkarsh"},
        {id:6, image: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/120443367_2636397539957083_8115881838779989977_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_ohc=GSLj4LJXngoAX_xNe3h&_nc_ht=scontent.fccu3-1.fna&oh=050770c03de2655a718e6de0f66b06d0&oe=60E095F3" , name: "Nikhil"},
        {id:7, image: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.18169-9/26734239_1867927353517712_2498038351887636526_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=e3f864&_nc_ohc=f0BhVvI0Pq4AX96OqL3&_nc_oc=AQlpd84SQbG6Aqf_0FawKh-7UcmAbpacxVJST0MHwei77Fy46wTUNcxCJ3XAwcgWmYo&_nc_ht=scontent.fccu3-1.fna&oh=068c4cb80d6ac6c2f3fce7486b6512c0&oe=60DFF682" , name: "Shashi"},
        {id:8, image: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/177772368_111298874427971_3540515728082731895_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OIi0OIiMVDMAX9mechd&tn=RH7IBuH3ipKbGC-t&_nc_ht=scontent.fccu3-1.fna&oh=9ba6f682a096945ac4102d06f847bda1&oe=60E109D3" , name: "Hariom"},
        {id:9, image: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/36383575_2085324261716349_94306856071069696_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6dDugqMhA3gAX_qBw3k&_nc_ht=scontent.fccu3-1.fna&oh=f05e95e6606e4295ec9fae55aaed104c&oe=60E04119" , name: "Shibu"}
    ]);
    return (
    <div className="stories">
      {state.map((user)=>(
        <div className="stories_info" key={user.id}>
            <div className="stories_img">
                <span>
                    <img src={user.image} alt={user.name} />
                </span>
            </div> 
            <div className="stories_name">{user.name}</div>
        </div>
        ))}
    </div> 
    );
}
 
export default Stories;