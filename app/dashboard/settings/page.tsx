'use client'
// import { useState, useEffect } from 'react';

// export default function Page() {
//   const [service, setService] = useState('whatsapp');
//   const [settings, setSettings] = useState({
//     apiKey: '',
//     phoneNumber: '',
//     accountSid: '',
//     authToken: '',
//     twilioNumber: '',
//     // Add other settings fields as needed
//   });

//   // Load settings from localStorage when the component mounts
//   useEffect(() => {
//     const savedSettings = localStorage.getItem(service + 'Settings');
//     if (savedSettings) {
//       setSettings(JSON.parse(savedSettings));
//     }
//   }, [service]);

//   // Save settings to localStorage when they change
//   useEffect(() => {
//     localStorage.setItem(service + 'Settings', JSON.stringify(settings));
//   }, [settings, service]);

//   // Update settings state
//   const handleChange = (e:any) => {
//     setSettings({
//       ...settings,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Render the settings form
//   return (
//     <main className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">API Settings</h1>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-semibold mb-2">
//             Select Service:
//           </label>
//           <select
//             className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             value={service}
//             onChange={(e) => setService(e.target.value)}
//           >
//             <option value="whatsapp">WhatsApp Business API</option>
//             <option value="twilio">Twilio</option>
//           </select>
//         </div>
//         {service === 'whatsapp' && (
//           // WhatsApp Business API form fields
//           <>
//             <label className="block text-gray-700 text-sm font-semibold mb-2">
//               API Key:
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               name="apiKey"
//               value={settings.apiKey}
//               onChange={handleChange}
//             />
//             {/* Add other WhatsApp specific fields */}
//           </>
//         )}
//         {service === 'twilio' && (
//           // Twilio form fields
//           <>
//             <label className="block text-gray-700 text-sm font-semibold mb-2">
//               Account SID:
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               name="accountSid"
//               value={settings.accountSid}
//               onChange={handleChange}
//             />
//             <label className="block text-gray-700 text-sm font-semibold mb-2">
//               Auth Token:
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               name="authToken"
//               value={settings.authToken}
//               onChange={handleChange}
//             />
//             <label className="block text-gray-700 text-sm font-semibold mb-2">
//               Twilio Number:
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               name="twilioNumber"
//               value={settings.twilioNumber}
//               onChange={handleChange}
//             />
//             {/* Add other Twilio specific fields */}
//           </>
//         )}
//         <button
//           className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="button"
//           onClick={() => setSettings(settings)}
//         >
//           Save
//         </button>
//       </div>
//     </main>
//   );
// }
import { useState, useEffect } from 'react';

export default function Page() {
  const [service, setService] = useState('whatsapp');
  const [settings, setSettings] = useState({
    apiKey: '',
    phoneNumber: '',
    accountSid: '',
    authToken: '',
    twilioNumber: '',
    whatsappApiLink: '',
    whatsappBusinessNumber: '',
  });

  // Key to save and retrieve from localStorage
  const localStorageKey = service + 'Settings';

  // Load settings from localStorage when the component mounts or service changes
  useEffect(() => {
    const savedSettings = localStorage.getItem(localStorageKey);
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, [service]);

  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(settings));
  }, [settings]);

  // Update settings state
  const handleChange = (e:any) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  // Render the settings form
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">API Settings</h1>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Select Service:
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="whatsapp">WhatsApp Business API</option>
              <option value="twilio">Twilio</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              {/* Custom dropdown arrow */}
              {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.408 0.392-1.141 0.392-1.549 0l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z"/>
              </svg> */}
            </div>
          </div>
        </div>
        <form className="bg-gray-50 p-4 rounded-lg">
          {service === 'whatsapp' && (
            // WhatsApp Business API form fields
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  API Key:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="apiKey"
                  value={settings.apiKey}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  WhatsApp Business Number:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="whatsappBusinessNumber"
                  value={settings.whatsappBusinessNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  WhatsApp API Link:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="whatsappApiLink"
                  value={settings.whatsappApiLink}
                  onChange={handleChange}
                />
              </div>
              {/* Add other WhatsApp specific fields */}
            </>
          )}
          {service === 'twilio' && (
            // Twilio form fields
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Account SID:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="accountSid"
                  value={settings.accountSid}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Auth Token:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="authToken"
                  value={settings.authToken}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Twilio Number:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="twilioNumber"
                  value={settings.twilioNumber}
                  onChange={handleChange}
                />
              </div>
              {/* Add other Twilio specific fields */}
            </>
          )}
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setSettings(settings)}
          >
            Save
          </button>
        </form>
      </div>
    </main>
  );
}


