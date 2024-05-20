import Image from 'next/image';
// import ProfilePicture from '../public/profile-picture.jpg'; // replace with your profile picture path

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Column */}
        <div className="md:w-2/3 space-y-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-6">
            <div className="relative w-24 h-24">
              <Image
                src="/images/profile.png"
                alt="Profile Picture"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Jake Gyll</h2>
              <p className="text-gray-600">Product Designer at Twitter</p>
              <p className="text-gray-600">Manchester, UK</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                Edit Profile
              </button>
            </div>
          </div>
          {/* Profile Completion */}
          <div className="relative w-full bg-gray-200 rounded-full h-4">
            <div className="absolute top-0 left-0 h-4 rounded-full bg-blue" style={{ width: '50%' }}></div>
          </div>
          {/* About Me */}
          <div>
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="mt-2 text-gray-700">
              I'm a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I'm passionate about designing digital products that have a positive impact on the world.
            </p>
            <p className="mt-2 text-gray-700">
              For 10 years, I've specialized in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.
            </p>
          </div>
          {/* Experiences */}
          <div>
            <h3 className="text-xl font-semibold">Experiences</h3>
            <div className="mt-4 space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="text-lg font-bold">Product Designer</h4>
                <p className="text-gray-600">Twitter - Full-Time - Jun 2019 - Present (1y 1m)</p>
                <p className="text-gray-600">Manchester, UK</p>
                <p className="mt-2 text-gray-700">
                  Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="text-lg font-bold">Growth Marketing Designer</h4>
                <p className="text-gray-600">GoDaddy - Full-Time - Jun 2011 - May 2019 (8y)</p>
                <p className="text-gray-600">Manchester, UK</p>
                <p className="mt-2 text-gray-700">
                  Created and managed global media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-1/3 space-y-6">
          {/* Additional Details */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Additional Details</h3>
            <p className="mt-4 text-gray-700">Email: jakegyll@email.com</p>
            <p className="text-gray-700">Phone: +44 1245 572 135</p>
            <p className="text-gray-700">Languages: English, French</p>
          </div>
          {/* Social Links */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Social Links</h3>
            <p className="mt-4 text-blue-500"><a href="http://www.linkedin.xyz">LinkedIn</a></p>
          </div>
          {/* Resume/CV */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Resume/CV</h3>
            <p className="mt-4 text-gray-700">Jackson Joe - CV - UI/UX Designer</p>
            <p className="text-gray-600">867 KB - 14 Feb 2022 at 11:30 am</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
