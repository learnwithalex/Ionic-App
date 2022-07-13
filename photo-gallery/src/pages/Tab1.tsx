import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import { arrowForward, cogOutline, addOutline, homeOutline, refreshOutline, starOutline} from 'ionicons/icons';

import './Tab1.css';






const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="Toolbar">
            <IonIcon icon={starOutline} />
          <input type="text" name="url" placeholder="Search Or Enter Address" className='inputToolbar'></input>
          <IonIcon icon={refreshOutline} />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent class="ion-padding tabBody">
   
  </IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
