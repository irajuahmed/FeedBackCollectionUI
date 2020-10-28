# FeedBackCollectionUI
1)	Open BrainStation_BE (Back end) in Visual Studio 2018 (Higher preferrable)
2)	Change DefaultConnection in appsetting.json file with you DB connection string
3)	Build the Solution (To ensure every package is installed)
4)	Publish BrainStation_BE in your local folder
5)	Create Application from your IIS with the publish folder
6)	Open BrainStation_FE (Front end) in VS Code
7)	Run the terminal
8)	In cmd type npm install (node modules will be added to the project)
9)	In security.service.ts change api endpoint. (where you created in step 5)->give your ip address and endpoint name
10)	After install/build type ng serve
11)	Application will open with localhost:4200 (It might be changed)
