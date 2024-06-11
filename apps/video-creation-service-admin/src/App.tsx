import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MusicList } from "./music/MusicList";
import { MusicCreate } from "./music/MusicCreate";
import { MusicEdit } from "./music/MusicEdit";
import { MusicShow } from "./music/MusicShow";
import { SubtitleList } from "./subtitle/SubtitleList";
import { SubtitleCreate } from "./subtitle/SubtitleCreate";
import { SubtitleEdit } from "./subtitle/SubtitleEdit";
import { SubtitleShow } from "./subtitle/SubtitleShow";
import { VisualList } from "./visual/VisualList";
import { VisualCreate } from "./visual/VisualCreate";
import { VisualEdit } from "./visual/VisualEdit";
import { VisualShow } from "./visual/VisualShow";
import { SoundEffectList } from "./soundEffect/SoundEffectList";
import { SoundEffectCreate } from "./soundEffect/SoundEffectCreate";
import { SoundEffectEdit } from "./soundEffect/SoundEffectEdit";
import { SoundEffectShow } from "./soundEffect/SoundEffectShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { VoiceOverList } from "./voiceOver/VoiceOverList";
import { VoiceOverCreate } from "./voiceOver/VoiceOverCreate";
import { VoiceOverEdit } from "./voiceOver/VoiceOverEdit";
import { VoiceOverShow } from "./voiceOver/VoiceOverShow";
import { ScriptList } from "./script/ScriptList";
import { ScriptCreate } from "./script/ScriptCreate";
import { ScriptEdit } from "./script/ScriptEdit";
import { ScriptShow } from "./script/ScriptShow";
import { CampaignList } from "./campaign/CampaignList";
import { CampaignCreate } from "./campaign/CampaignCreate";
import { CampaignEdit } from "./campaign/CampaignEdit";
import { CampaignShow } from "./campaign/CampaignShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VideoCreationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Music"
          list={MusicList}
          edit={MusicEdit}
          create={MusicCreate}
          show={MusicShow}
        />
        <Resource
          name="Subtitle"
          list={SubtitleList}
          edit={SubtitleEdit}
          create={SubtitleCreate}
          show={SubtitleShow}
        />
        <Resource
          name="Visual"
          list={VisualList}
          edit={VisualEdit}
          create={VisualCreate}
          show={VisualShow}
        />
        <Resource
          name="SoundEffect"
          list={SoundEffectList}
          edit={SoundEffectEdit}
          create={SoundEffectCreate}
          show={SoundEffectShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="VoiceOver"
          list={VoiceOverList}
          edit={VoiceOverEdit}
          create={VoiceOverCreate}
          show={VoiceOverShow}
        />
        <Resource
          name="Script"
          list={ScriptList}
          edit={ScriptEdit}
          create={ScriptCreate}
          show={ScriptShow}
        />
        <Resource
          name="Campaign"
          list={CampaignList}
          edit={CampaignEdit}
          create={CampaignCreate}
          show={CampaignShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
