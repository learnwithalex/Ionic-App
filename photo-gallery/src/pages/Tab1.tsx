import React from 'react';
import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonInput, IonToolbar, IonFab, IonFabButton, IonIcon, IonItem, IonMenu, IonRouterOutlet, IonLabel, IonFabList, IonList, IonMenuButton, IonButtons, IonSearchbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, downloadOutline } from 'ionicons/icons';


const Tab1: React.FC = () => {
 return (
 
    <IonPage>

      <IonHeader>
        <IonToolbar class="ion-padding-top">
         <IonSearchbar placeholder="Search or enter Address"></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        



        {/*-- fab placed to the bottom start --*/}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={downloadOutline} />
          </IonFabButton>
        </IonFab>

       
        <IonCardHeader>
          <IonCardTitle class="ion-text-center">
           <img src="https://questgig.com/questgig.png" height="30" width="30"></img> T-Africa
          </IonCardTitle>
          <IonSearchbar placeholder="Search or enter Address"></IonSearchbar>
        </IonCardHeader>
      
<IonGrid>
  <IonRow class="ion-align-items-start">
    <IonCol>
    <IonCard>
    <IonCardContent>Div</IonCardContent>
    </IonCard>
    </IonCol>
    <IonCol>
    <IonCard>
    <IonCardContent>Div</IonCardContent>
    </IonCard>
    </IonCol>
    <IonCol>
    <IonCard>
    <IonCardContent>Div</IonCardContent>
    </IonCard>
    </IonCol>
        <IonCol>
    <IonCard>
    <IonCardContent>Div</IonCardContent>
    </IonCard>
    </IonCol>
    <IonCol>
    <IonCard>
    <IonCardContent>Div</IonCardContent>
    </IonCard>
    </IonCol>
    <IonCol>
    <IonCard>
    <IonCardContent>Div</IonCardContent>
    </IonCard>
    </IonCol>
  </IonRow>
  

</IonGrid>
<IonCard><img src='https://ionicframework.com/docs/demos/api/card/madison.jpg'/><IonCardHeader><IonCardSubtitle>Destination</IonCardSubtitle><IonCardTitle>Madison, WI</IonCardTitle></IonCardHeader><IonCardContent>Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of theWisconsin Territory in 1836.</IonCardContent></IonCard>
      {/* <div id="LoadNews">

      </div> */}
        
     </IonContent>
    </IonPage>
  );

};

export default Tab1;