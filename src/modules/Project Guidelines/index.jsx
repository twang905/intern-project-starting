import React from 'react';
import styles from './styles.scss';

const ProjectGuidelines = () => {
  return (
    <div className="ProjectGuidelines">
      <div className="page-wrapper">
        <h1>Project Structure and Guidelines</h1>
        <p>
          This page is going to explain the structure of this stub project as well as all the standards that we will be
          following in order to keep this project as organized and easy to scale as possible.
        </p>
        <h2>src</h2>
        <p>src will be the highest level folder in this project. From here there are four child folders:</p>
        <li>main</li>
        <li>modules</li>
        <li>library</li>
        <li>resources</li>
        <p>There is also a index.scss file that is used to define styling globally.</p>
        <h2>src/main</h2>
        <p>
          This folder will be containing two things - <strong>Axios</strong> and the <strong>Routing</strong>. Axios
          will be used as the api client. It is only for setup so nobody will ever need to touch this folder. The routes
          folder contains a JS file with all the routes listed and will only need to be touched when adding a new page.
        </p>
        <h2>src/modules</h2>
        <p>
          Each page component in this project should be a top level folder in this directory. Each folder will be named
          the name of the page in title case letters with spacing. It will contain an <strong>index.jsx</strong>{' '}
          containing the code for that page component as well as a <strong>styles.scss</strong> for styling for that
          specific index.jsx file. This will make it so that whenever you need to import this component elsewhere it
          will go as follows:
        </p>
        <code>Import Component from "pathtocomponent/Component Name";</code>
        <p>...and when you need to import the stylesheet it will always be at the same relative level:</p>
        <code>Import styles from "./styles.scss;</code>
        <p>
          {' '}
          Every direct child of this component that is not used again in another page should be a folder named with the
          same title case and space conventions as the top level folder and also contain it's own index.jsx and
          styles.scss file. Any direct children of these components will repeat the same pattern. This way everytime a
          child component is imported into a parent component JSX file the relative path will ways be the same so the
          import statement will always look like:
        </p>
        <code>Import ChildComponent from "./Child Component"</code>
        <p>
          <strong>Ex.</strong>
        </p>
        <div className="directory-list">
          <p>
            <strong>- src/modules</strong>
          </p>
          <ul>
            <p>
              <strong>- Home Page</strong>
            </p>
            <ul>
              <p>- index.jsx</p>
              <p>- styles.scss</p>
              <p>
                <strong>- Home Page NavBar</strong>
              </p>
              <ul>
                <p>- index.jsx</p>
                <p>- styles.scss</p>
              </ul>
              <p>
                <strong>- Home Page Footer</strong>
              </p>
              <ul>
                <p>- index.jsx</p>
                <p>- styles.scss</p>
              </ul>
            </ul>
            <p>
              <strong>- Login Page</strong>
            </p>
            <ul>
              <p>- index.jsx</p>
              <p>- styles.scss</p>
              <p>
                <strong>- Login Form</strong>
              </p>
              <ul>
                <p>- index.jsx</p>
                <p>- styles.scss</p>
              </ul>
            </ul>
          </ul>
        </div>
        <h2>src/library</h2>
        <p>
          This folder contains the subfolders <strong> utilities</strong>, <strong> components</strong>,{' '}
          <strong> constants</strong> and <strong>api</strong>. Essentially anything that is used on more than one page
          should go into here.
        </p>
        <p>
          If a function is ever used more than once it should go in <strong>utilities</strong>. If a component is used
          on two separate pages it should go in <strong>components</strong> rather than in the parent components' folder
          in <strong>src/main</strong>. Since your IDE will throw errors if you mispell a variable name, all string
          constants should be stored as a variable in <strong>constants</strong>. Images should also be imported into
          the imageConstants.js file and should only be used in other files by importing from this file. Any services
          the app uses will be separate JS file in the <strong>api</strong> folder and implement the Axios client in{' '}
          <strong>src/main</strong>
        </p>
        <h2>src/resources</h2>
        <p>Resources will contain images, fonts, and styling variables.</p>
        <p>
          For this project <strong>styles/variables.scss</strong> should be the only place in which colors are declared
          and any other style sheets should reference these variables.
        </p>
        <p>
          Image files should be stored here, but only imported from the imageConstants.js file when being used in any
          components
        </p>
        <h3>Questions</h3>
        <p>If you have any questions about this page please DM Thomas Wang on Slack.</p>
      </div>
    </div>
  );
};

export default ProjectGuidelines;
