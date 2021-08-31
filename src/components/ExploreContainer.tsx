import { IonButton, useIonAlert } from "@ionic/react";

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [ showAlert ] = useIonAlert();
  return (
    <div className="container">
      <IonButton expand="block" onClick={ () =>
          showAlert({ header: 'Alert', message: 'alert from hook', buttons: [ 'Ok' ] })
        }
      >Show Alert
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
