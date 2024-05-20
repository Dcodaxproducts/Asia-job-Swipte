// pages/index.js

import Tabs from "../../../repeatComponents/Tabs"
import Profile from "./Profile";

const IndexPage = () => {
  const tabs = [
    {
      title: 'My Profile',
      content: <div><Profile/></div>
    },
    {
      title: 'Applied Jobs',
      content: <div>Content of Tab 2</div>
    },
    {
      title: 'Messages',
      content: <div>Content of Tab 3</div>
    },

    {
        title: 'Notifications',
        content: <div>Content of Tab 3</div>
      },

      {
        title: 'Declined Jobs',
        content: <div>Content of Tab 3</div>
      },
  ];

  return (
    <div className="container mx-auto mt-8">
     

      <Tabs tabs={tabs} />
    </div>
  );
};

export default IndexPage;
