import { IonApp } from '@ionic/react';
import { ionFireEvent } from '@ionic/react-test-utils';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ExploreContainer from './ExploreContainer';

describe("Test component", () => {
    beforeEach(()=>{
        render(
            <IonApp>
                <ExploreContainer />
            </IonApp>
        );
    });

    test("Alert test", async () => {
        fireEvent.click(screen.getByText("Show Alert"));
		await waitFor(()=>{
			expect(screen.getByText("alert from hook")).toBeVisible();
		});
    })
});