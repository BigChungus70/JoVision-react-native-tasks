import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { Task16 } from "./Tasks/Task16";
import { Task17 } from "./Tasks/Task17";
import { Task18 } from "./Tasks/Task18";
import { Task19 } from "./Tasks/Task19";
import { Task20 } from "./Tasks/Task20";
import { Task21 } from "./Tasks/Task21";
import Task22 from "./Tasks/Task22";
import Task23 from "./Tasks/Task23";
import Task24 from "./Tasks/Task24";
import Task25 from "./Tasks/Task25";
import Task26 from "./Tasks/Task26";
import Task27 from "./Tasks/Task27";
import Task28 from "./Tasks/Task28 + 29 + 30 + 31";
import Task32 from "./Tasks/Task32";
import Task33 from "./Tasks/Task33";
import Task34 from "./Tasks/Task34";
import Task35 from "./Tasks/Task35";
import Task36 from "./Tasks/Task36 + 37";
import Task38 from "./Tasks/Task38";
import Task39 from "./Tasks/Task39";
import Task40 from "./Tasks/Task40";
import Task41 from "./Tasks/Task41 + 42";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                style={{ alignContent: "center", }}
                nestedScrollEnabled={true}
            >

                {/* <Task16/> */}
                {/* <Task17/> */}
                {/* <Task18/> */}
                {/* <Task19/> */}
                {/* <Task20/> */}
                {/* <Task21/> */}
                {/* <Task22/> */}
                {/* <Task23/> */}
                {/* <Task24/> */}
                {/* <Task25/> */}
                {/* <Task26/> */}
                {/* <Task27/> */}
                {/* <Task28/> */}
                {/* <Task32/> */}
                {/* <Task33/> */}
                {/* <Task34/> */}
                {/* <Task35/> */}
                {/* <Task36/> */}
                {/* <Task38/> */}
                {/* <Task39/> */}
                {/* <Task40/> */}
                <Task41/>

            </ScrollView>
        </SafeAreaProvider>
    );
}
