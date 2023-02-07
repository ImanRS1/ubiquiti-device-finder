## Ubiquiti-device-finder

Device portal for exploring, finding and sharing information about Ubiquitis devices, exposed by their public device database https://static.ui.com/fingerprint/ui/public.json. The app includes layout shifting, filtering and searching features as well as a details page per device generated on click.
___    
#### Prerequisites:
Node v16.14.2

#### Installing:
npm install

#### Development:
npm run dev
___   

Tech stack used: NextJS, React, Styled components, Framer motion, Playwright and Vercels SWR package for fetching data.

* **NextJS**: was picked as a framework because of its many useful features such as its dynamic routing and ease of deployment.

* **React**: due to the several different components that can be re-rendered as needed as well as Reacts many useful inbuilt hooks.

* **Styled components**: due to its excellent JSX features and allowing each component to be complete and isolated.

* **Framer motion**: for its smooth and easy to use animation features, especially their AnimatePresence feature which enables animation of component at dismounts.

* **Playwright**: for its highly realistic e2e test structure which covers multiple browsers.

* **SWR**: used for its client side data fetching properties, auto-caching and revalidation.


___   
#### Todos:
→ Fully include Playwright assertions for complete E2E coverage, separate tests based on use-case.

→ Include unit tests where its applicable with Jest.

→ Refactor remaining logical functions to the utils folder.

→ Handle loading stage and error stage from the SWR data fetch globally.

→ Implement header tags for link sharing.

→ Fix feature for highlighting searchbar when user clicks on search icon.

→ Extend and stagger animations to trigger when components are in view.


