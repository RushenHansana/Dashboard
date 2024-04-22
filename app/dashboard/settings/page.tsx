'use client'
import { useState, useEffect } from 'react';
import { whatsappsettings } from '@/app/lib/actions';
import { turnsettings } from '@/app/lib/actions';
import { set } from 'date-fns';

export default function Page() {
  const [service, setService] = useState('whatsapp');
  const [isSaved, setIsSaved] = useState(0);
  const [settings, setSettings] = useState({
    access_token: '',
    url: '',
    template: '',
    turl: '',
    username: '',
    password: '',
    whatsappBusinessNumber: '',
  });

  const [whatsappSettings, setWhatsappSettings] = useState({
    access_token: '',
    url: '',
    template_name: '',
  });
  const [turnSettings, setTurnSettings] = useState({
    turl: '',
    username: '',
    password: '',
  });


  // Key to save and retrieve from localStorage
  const localStorageKey = service + 'Settings';


  const handleWhatsappChange = (e: any) => {
    setWhatsappSettings({
      ...whatsappSettings,
      [e.target.name]: e.target.value,
    });
    
  };
  
  const handleTurnChange = (e: any) => {
    setTurnSettings({
      ...turnSettings,
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
            Select Setting:
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="whatsapp">WhatsApp Business API</option>
              <option value="turn">Turn Server</option>
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
          {isSaved==1 && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Settings saved successfully!
          </div>
           )} 
          {isSaved==2 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Settings not saved! Please try again.
          </div>
            )}
           
          {service === 'whatsapp' && (
            // WhatsApp Business API form fields
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Access Token:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="access_token"
                  value={whatsappSettings.access_token}
                  onChange={handleWhatsappChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  WhatsApp Business API URL:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="url"
                  value={whatsappSettings.url}
                  onChange={handleWhatsappChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  WhatsApp Message Template:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="template_name"
                  value={whatsappSettings.template_name}
                  onChange={handleWhatsappChange}
                />
              </div>
              {/* Add other WhatsApp specific fields */}
            </>
          )}
          {service === 'turn' && (
            // Twilio form fields
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Turn URL:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="accountSid"
                  value={turnSettings.turl}
                  onChange={handleTurnChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Turn Username:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="authToken"
                  value={turnSettings.username}
                  onChange={handleTurnChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Turn Password:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="twilioNumber"
                  value={turnSettings.password}
                  onChange={handleTurnChange}
                />
              </div>
              {/* Add other Twilio specific fields */}
            </>
          )}
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={async () => {
              if (service === 'whatsapp') {
                  const response = await whatsappsettings(whatsappSettings);
                  if (response['message'] === 'success') {
                    setIsSaved(1);
                    setTimeout(() => setIsSaved(0), 3000); // Hide message after 3 seconds
                  }else {
                    setIsSaved(2);
                    setTimeout(() => setIsSaved(0), 3000); // Hide message after 3 seconds
                  }
              } else if (service === 'turn') {
                  const response = await turnsettings(turnSettings);
                  if (response['message'] === 'success') {
                    setIsSaved(1);
                    setTimeout(() => setIsSaved(0), 3000); // Hide message after 3 seconds
                  }else {
                    setIsSaved(2);
                    setTimeout(() => setIsSaved(0), 3000); // Hide message after 3 seconds
                  }
                
              }
          }}
          >
            Save
          </button>
        </form>
      </div>
    </main>
  );
}


