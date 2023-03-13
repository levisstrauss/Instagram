
This project is an Instagram clone mobile application under development using React Native cli
and TypeScript.

------- Environment sep up ------------------------>

        - Install Brew 
        - brew --version
        - brew install node, yarn or npm, watcham, git if not install already
        - yarn add golbal expo-cli - expo --version - expo whoami - expo register - expo login
        - Install Xcode -> set up the command line -> download the simulator of Xcode parameter -> location & Component
        - install Ruby  -> brew install ruby
        - Install cocoapoads in this directory -> sudo gem install -n /usr/local/bin ffi cocoapods - pod --version

        - if we want to run the app on IOS just open the IOS folder in Xcode
        - To run the different simulator: react-native run-ios --simulator="iPhone 13 Pro Max"
        - To start the server: react-native start
        - react-native run-ios or react-native run-ios --simulator="iPhone 13 Pro Max"
        - npx pod-install ios

------- Create a react native cli project ------------>

        Initialize the project
        npx react-native init Instagram --template react-native-template-typescript
        CLI Commands
        start development server
        $ npm start or yarn start
        start a clean, fresh development server by resetting the cache
        yarn start -- --reset-cache

        run the app on an android device/emulator
        yarn run android

        Install Pods (macOS users only)
        npx pod-install ios or update npm i -g pod-install

        run the app on an iOS device/simulator
        npm run ios

        Configuration of babel.config.js this will allows you to not import 
        react all the time.
        module.exports = {
        presets: [
          [
            'module:metro-react-native-babel-preset',
            {useTransformReactJSXExperimental: true},
          ],
        ],
        plugins: [
          [
            '@babel/plugin-transform-react-jsx',
            {
              runtime: 'automatic',
            },
          ],
        ],
        };

        start development server
        $ npm start
        start a clean, fresh development server by resetting the cache
        $ npm start -- --reset-cache
        run the app on an android device/emulator
        $ npm run android
        Install Pods (macOS users only)
        $ npx pod-install ios
        run the app on an iOS device/simulator
        npm run ios



        NB: For the windowns systems, it is pretty much the same thing. Install all the requires dependencies
            For the REACT-NATIVE CLI, follow the recommedation on the reactnative.dev website

        For any other rason, if the app is not loading on the simulator, just delete the node package and run npm
        or yarn install to install all dependencies
        
------- Git Commands -------------------------------->

        - rm -rf .git*  => Completly remove git from a project
        - git init      => Add git
        - git remote add origin https://url
        - git status
        - git add .
        - git commit -m "Message"
        - git push origin master
        - git branch -M branch name 
        - git pull => to fetch all the changes

                - Branching:
    
                    git checkout main
                    git fetch origin
                    git reset --hard origin/main
        
                - Create new branch
                    git branch                  // to see all branches
                    git checkout -b new-feature // Create and move to branch
    
                - Log 
                  git log  // to see all logs
      
                - Create a branch from an older commit 
                  git branch name id not all only the first 6 desc.
     
                - Delete a branch
                  git branch -d name
    
                - Merge a branch
                  Move on the branch you want to merge and git merge name 
                  For example: let say I want to merge A to master
                    1- move to master first
                    2- git merge A
                     After mergin the branch, we can delete it
                    3- git branch -d A
        
                - Revert
                  git revert HEAD
   

------ Project Structures ----------------------------->

       - App.tsx represents the entry point of the application

       - Instagram -> the project folder
           _android
           -ios
           - src
              |_assets       // keep all assets
              |_components   // all the components
              |_screens      // The screens representation of all components
              |_theme        // Some specific theme
              |_types
           - App.tsx
           - babel.config.js
           - app.json
           - Readme
           - index.js
           -......

----- Vectors Icons ------------------------------->

       ----------- Installation ---------------
        
       React native vector icon github website
       https://github.com/oblador/react-native-vector-icons#option-manually
        
       All the beautiful vector Icon use website
       https://oblador.github.io/react-native-vector-icons/
        
        
       ----------- Project package installations ---------------
       npm or yarn add react-native-vector-icons
       npm or yarn add  @types/react-native-vector-icons

   
----- Configurations vectors icons----------------------->

      ----Documentation-----------------
      https://github.com/oblador/react-native-vector-icons#ios
      ----Installation ---------------
      yarn install react-native-vector-icons
      yarn install @types/react-native-vector-icons

      ------ Configuration IOS------------
   
      We have to configure IOS by copying the icon array inside of:
      IOS folder => Instagram => info.plist => Paste right before closing the dictionary
    
        <key>UIAppFonts</key>
            <array>
              <string>AntDesign.ttf</string>
              <string>Entypo.ttf</string>
              <string>EvilIcons.ttf</string>
              <string>Feather.ttf</string>
              <string>FontAwesome.ttf</string>
              <string>FontAwesome5_Brands.ttf</string>
              <string>FontAwesome5_Regular.ttf</string>
              <string>FontAwesome5_Solid.ttf</string>
              <string>Foundation.ttf</string>
              <string>Ionicons.ttf</string>
              <string>MaterialIcons.ttf</string>
              <string>MaterialCommunityIcons.ttf</string>
              <string>SimpleLineIcons.ttf</string>
              <string>Octicons.ttf</string>
              <string>Zocial.ttf</string>
              <string>Fontisto.ttf</string>
            </array>

      ------------ Configuration Android -------------
      Android folder => app => build.gradle
      Add this at the end: 
      apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

      ------------ URL Ressource -------------
      - Info.plist fonts for ios
      https://github.com/oblador/react-native-vector-icons#option-manually
      - Resource React native Vector icons documentations
      https://github.com/oblador/react-native-vector-icons
      - React Native Vector Icons Directory 
      https://oblador.github.io/react-native-vector-icons/

----- Building the App --------------------------->
  
      --------------------- FeedPost Component -------------------
   
      Pretty simple

      --------------------- Comment Component --------------------

      -The FlatList is very important wnat we have to scroll inside 
      of a lot of data otherwise we can map
      NB: if the data do not content any key using the flatList, we can
      use the property keyExtractor={item => { return `post-${item.createAt}`}}

      --------------------- Carousel Component --------------------

      - We us a hook of react native called useWindowDimensions() to make the image to take the all width 
        of the screen.
      - We use the useState to change the color of the dot.
      - The react-native Flatlist onViewableItemsChange and viewabilityConfig hook to manage the current image 
       on the screen of the carousel. It can even be log in the console to see the object it return.


      --------------------- Video Player Component --------------------
      - Installation
      npm install react-native-video

       -The Video Player component is implemented with a react native librairy called react-native-video
        https://github.com/react-native-video/react-native-video
       - If there is a problem installing the library for Android, check out this link
         https://github.com/react-native-video/react-native-video/issues/2468#issuecomment-913709636

      --------------------- Component input --------------------
           Pretty Simple which mean, there is nothing complicate to downlownd 

      --------------------- User Profile Screem --------------------
       - We use the FlatList the render the grid, numColumns={3} as property and the flex: 1 as the 
         style fpr the separation.
       - Having a FlatList inside of the scrollView with different direction is not recommended because 
         it will create a confusion between the direction of both views.
       - ListHeaderComponent allows us to use a hole component as header of another separated component

      --------------------- Edit Profile --------------------
      - We use the React Hook form for validation https://react-hook-form.com/get-started => react native
      - const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    
      --------------------Change profile photo image picker --------------------

       - https://github.com/react-native-image-picker/react-native-image-picker
       - FOr the IOS -> ios folder -> name of the Project -> info.plist -> paste
         <key>NSPhotoLibraryUsageDescription</key>
    	 <string>Photo library permission is needed to change your avatar</string>
       - For Android, we dont jhave nothing to do
 
      ------------------ Upload photo --------------------
       - Library to install: npx install-expo-modules which is an expo core module
         https://docs.expo.dev/bare/installing-expo-modules/

     ------------------ Post Upload Screen --------------------



