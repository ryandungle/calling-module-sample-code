import logo from "./logo.svg";
import "./App.css";

import { useEffect } from "react";
import {
  createUser,
  getUsers,
  signIn,
  signOutUser,
  api,
  getClinics,
} from "./controllers/helperFunctions";
import { useAuthState } from "./controllers/customHooks";
function App() {
  const [user] = useAuthState();

  const handleGetUsers = async () => {
    try {
      const users = await getUsers();
      console.log(users);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetClinics = async () => {
    try {
      const clinics = await getClinics();
      console.log(clinics);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => console.log(user)}>Print user Data</button>
        <button onClick={() => signIn("callingadmin@gmail.com", "123456")}>
          Sign in
        </button>
        <button onClick={() => signIn("callingagent1@gmail.com", "111111")}>
          Sign in
        </button>
        <button onClick={() => signIn("callingadmin@gmail.com", "123456")}>
          Sign in
        </button>
        <button onClick={signOutUser}>Sign out</button>
        <button onClick={handleGetUsers}>List Users</button>
        <button onClick={handleGetClinics}>List Clinics</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
const adminUser = {
  uid: "TSKOxzuB1ugogLTFMvnhvuuTXwo1",
  email: "callingadmin@gmail.com",
  emailVerified: false,
  isAnonymous: false,
  providerData: [
    {
      providerId: "password",
      uid: "callingadmin@gmail.com",
      displayName: null,
      email: "callingadmin@gmail.com",
      phoneNumber: null,
      photoURL: null,
    },
  ],
  stsTokenManager: {
    refreshToken:
      "AFxQ4_rZc4aMknaYypzuCyEMLIiQ5Lg3z1YjUvUPt8bIMomr5R9HJ2KoJ2Gbwz1LSqRvtWRLTn_Ltj77rjDovGO2bZME6gQleV_Q7w27XlG413Fr3_Y8ccmatSenIHB4Mak7tUHMOdZniyhKSn04GE7HFQ43gFjMn2dTDtCWEPmrTXCT4j12_EMNbNX2Q8vLRzM2_zF1qEBFa31CldFChL0MZOgM7PRP3g",
    accessToken:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IjcxMTQzNzFiMmU4NmY4MGM1YzYxNThmNDUzYzk0NTEyNmZlNzM5Y2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVudHJhY2stNDZiNDgiLCJhdWQiOiJkZW50cmFjay00NmI0OCIsImF1dGhfdGltZSI6MTY0MDI5MDc1MCwidXNlcl9pZCI6IlRTS094enVCMXVnb2dMVEZNdm5odnV1VFh3bzEiLCJzdWIiOiJUU0tPeHp1QjF1Z29nTFRGTXZuaHZ1dVRYd28xIiwiaWF0IjoxNjQwMjkwNzUwLCJleHAiOjE2NDAyOTQzNTAsImVtYWlsIjoiY2FsbGluZ2FkbWluQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJjYWxsaW5nYWRtaW5AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.HkB8gQXeUakzyaasRu8T_XTuBJ4pJ_4XJ3QqDbaaNXcGHH9gRlanK92ZVpRo9mxegPE9Jiwv2x-L4TwWItrhb3Vd51mi72DLXUDORbdXdec5cLMDNNZEPYEG8VWGSVh9000RskLHHzfa3pPNTELtT1JIoQBiDlrr90gvtu9fRkpBSJfVFbeMKwRm6pkTOaaQBIXiv856p-sXlfVu4gHAW3dEB0xq3xYVUQ-Vb9z-yWBBcCpjH_amuNNcANBGb6ArGLiHj5jHJBy3pn0VLICTCeCR0HxtGd9KeT2X2GvN0neHvD-ocO8ShFi8osu_wbfYtfNAqV_WrFstib9zbtFaTg",
    expirationTime: 1640294351485,
  },
  createdAt: "1640290750601",
  lastLoginAt: "1640290750601",
  apiKey: "AIzaSyBfd-BDW4ODiE88fDzEAx4QaRWiEZIPY8E",
  appName: "[DEFAULT]",
};
