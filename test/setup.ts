/* eslint-disable no-unused-vars */
import chai from 'chai';
import sinonChai from 'sinon-chai';

const projectId = 'demo-project';
const databaseEmulatorPort = 9000;
const firstoreEmulatorPort = 8080;
const authEmulatorPort = 9099;
const databaseURL = `http://localhost:${databaseEmulatorPort}?ns=${projectId}`;

// Set environment variables
process.env.NODE_ENV = 'test';
process.env.GCLOUD_PROJECT = projectId;
process.env.FIREBASE_DATABASE_EMULATOR_HOST = `localhost:${databaseEmulatorPort}`;
process.env.FIRESTORE_EMULATOR_HOST = `localhost:${firstoreEmulatorPort}`;
process.env.FIREBASE_AUTH_EMULATOR_HOST = `localhost:${authEmulatorPort}`;

chai.use(sinonChai);

// Set global variables
(global as any).projectId = projectId;
(global as any).databaseURL = databaseURL;
