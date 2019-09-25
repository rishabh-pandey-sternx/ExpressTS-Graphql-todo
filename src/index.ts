import App from './providers/App';
import NativeEvent from './exception/NativeEvent';

// Catch the process events
NativeEvent.process();

// Clean the console before start
App.clearConsole();

// Load the configurations from dotenv
App.loadConfiguration();

// Run the database pool
App.loadDatabase();

// Run the server
App.loadServer();
