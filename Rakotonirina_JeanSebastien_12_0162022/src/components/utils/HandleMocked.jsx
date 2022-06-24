
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../mockedJson/data'
 
function HandleMocked(){
        const data = 
       {
           datas : [
            ...USER_MAIN_DATA,
            ...USER_ACTIVITY,
            ...USER_AVERAGE_SESSIONS,
            ...USER_PERFORMANCE 
           ]
       }
    return { data }
};

export default HandleMocked;