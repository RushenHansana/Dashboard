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
    <main className="min-h-screen  py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Settings</h1>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Select Setting:
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="whatsapp">WhatsApp Business API</option>
              <option value="turn">Turn Server</option>
            </select>
          </div>
        </div>
        <form className="bg-gray-100 p-6 rounded-lg">
          {isSaved === 1 && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Settings saved successfully!
            </div>
          )}
          {isSaved === 2 && (
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  type="text"
                  name="template_name"
                  value={whatsappSettings.template_name}
                  onChange={handleWhatsappChange}
                />
              </div>
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  type="text"
                  name="turl"
                  value={turnSettings.turl}
                  onChange={handleTurnChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Turn Username:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  type="text"
                  name="username"
                  value={turnSettings.username}
                  onChange={handleTurnChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Turn Password:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  type="password"
                  name="password"
                  value={turnSettings.password}
                  onChange={handleTurnChange}
                />
              </div>
            </>
          )}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            type="button"
            onClick={async () => {
              if (service === 'whatsapp') {
                const response = await whatsappsettings(whatsappSettings);
                if (response['message'] === 'success') {
                  setIsSaved(1);
                  setTimeout(() => setIsSaved(0), 3000); // Hide message after 3 seconds
                } else {
                  setIsSaved(2);
                  setTimeout(() => setIsSaved(0), 3000); // Hide message after 3 seconds
                }
              } else if (service === 'turn') {
                const response = await turnsettings(turnSettings);
                if (response['message'] === 'success') {
                  setIsSaved(1);
                  setTimeout(() => setIsSaved(0), 3000); // Hide message after 3 seconds
                } else {
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


