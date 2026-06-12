▗▄▄▄▖ ▗▄▖ ▗▄▄▄▖▗▖        ▗▄▄▖ ▗▄▖ ▗▄▄▄▖▗▄▄▄▖
▐▌   ▐▌ ▐▌  █  ▐▌       ▐▌   ▐▌ ▐▌▐▌   ▐▌   
▐▛▀▀▘▐▛▀▜▌  █  ▐▌   ▀▀▀▘ ▝▀▚▖▐▛▀▜▌▐▛▀▀▘▐▛▀▀▘
▐▌   ▐▌ ▐▌▗▄█▄▖▐▙▄▄▖    ▗▄▄▞▘▐▌ ▐▌▐▌   ▐▙▄▄▖


  HI! Welcome to my first "open source" project :) I've been waiting for the right moment to share some actual source code with you guys and after seeing the response to Fail-safe I decided now was the perfect time. Feel free to edit, remix, or just play around with this track, and if you make something you like, please share it in the discord [https://discord.gg/ZU6SUs6Mem] !!
  
  Make sure you download all the Fail-safe samples from my GitHub and import them into Strudel so you can hear the full track (menu => sounds => import sounds). You can just drag the whole main samples folder in and they will be linked correctly.

    I left notes throughout the file to help with understanding how I wrote everything -- like noting where certain elements are and which code sections you can mostly ignore. Everything is obviously editable, so go crazy! If you encounter any technical difficulties when executing this file just shoot me a message on discord and I'll help you.
  
  One last note before you get started => I want to mention that while I am making the source code and samples available, the intellectual material within this file and the samples are under ownership of my label and I, which is why I have it under a CC BY-NC-SA license. 

  I can't wait to hear what you make!!! Happy coding ♡

*** Pleaseeee no AI

  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⡀⠀⠂⠀⠄⡀⢀⡂⣀⠀⢀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⣀⣈⠹⢛⣿⣖⣶⡷⢮⡴⣶⡲⣵⣘⣐⣌⣤
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠈⠉⠈⣉⢐⣲⢾⣿⠻⠿⣿⠿⢝⡻⡿⠿⢛⣻
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢠⣀⣨⣏⣩⠵⠶⠷⢓⣾⣊⡥⢞⡹⠛⣻⣷⣲⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⢒⠒⠒⢲⣠⡝⣭⣷⣚⣿⣽⡽⣿⠿⢿⠿⢫⣿⠿⣒⣻⣿⣟⣉⣹⣯⡽
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⡠⢄⣉⡀⣦⣖⣒⣺⣧⣭⣽⣯⡯⠍⢫⣉⣿⠜⢉⣡⣮⣿⣽⣿⡿⠟⠋⢁⠄⠀⠀⠉⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠐⠁⠀⠀⣀⣔⣷⠽⠭⠿⣛⣶⣶⡫⢍⡕⢑⣈⢶⡦⠞⣋⢤⢎⣻⣿⡞⠛⠥⠐⠊⠥⠀⡀⠀⡠⠰⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⣤⡖⣉⣠⣋⣌⣭⣲⣷⢮⣥⣲⡒⠢⢤⢶⡿⠿⢛⣭⡿⣟⣷⣶⠾⠿⠛⣉⡊⠁⠀⠀⢀⠔⠀⠀⠠⢀⠈⠂⠀⠀⠀⢀
⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠄⠀⠀⠤⢀⣁⠠⣤⠌⢻⣛⣷⣖⣗⣷⠖⣻⣿⠯⣡⠔⢁⠔⣠⠞⣡⣔⠼⣶⠟⠮⣃⠐⠉⠁⠀⠉⠁⠠⡠⠤⠲⠊⠁⠀⠀⡀⠄⠁⠀⠀⠀⠀⡄⣲
⠀⠀⠀⡠⠁⠀⠀⠀⠈⠑⠒⠈⢩⣶⣶⣾⢲⣛⣿⢿⠟⣿⡥⣶⡷⣟⣿⡥⣚⣥⡾⣛⣛⣴⡿⠎⣫⠟⠉⠐⠂⢸⠐⠀⠀⠀⠉⠁⠒⠑⠒⠀⠈⠀⠀⠈⠀⠀⠀⢀⣴⣬⣾⣿⣋
⠀⢀⠔⠁⠀⠀⢀⠀⢀⣐⣛⢻⣿⠿⠿⣽⡷⣯⣿⣶⣞⣭⣯⠷⣻⣽⣷⡿⢛⠁⢅⣋⣝⣶⠶⠏⠡⠄⠒⠀⢈⠄⠀⠀⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢐⣴⣯⣿⣿⠟⣩⡿
⠀⠀⡤⠀⢪⡠⠤⠬⢭⣭⢿⣟⣷⣽⣛⣭⡿⣟⡿⢿⢿⣿⡿⣾⠻⠍⢓⠩⠕⠏⠉⠋⠐⠀⠂⠀⠀⠀⠀⠠⠈⠀⠀⣴⠀⢀⠀⣀⢀⣀⣠⣠⣤⣤⣴⣾⣶⣿⣿⣿⣟⣠⣾⠓⠀
⠀⣁⡤⠟⠙⢁⢔⠾⢫⢴⣯⣟⣿⠞⡝⠉⠋⠃⠊⠁⠀⠀⣀⣅⣀⣀⣀⣀⣀⢠⣶⣠⣤⢤⣴⠶⣶⠾⠥⣴⡶⣶⣾⣭⣟⠺⡿⢟⠻⠟⠛⠻⣿⢿⣿⣟⣛⣭⣴⣾⣿⠟⠁⠀⠀
⠜⡁⠤⢒⢀⣄⣴⠺⠛⠛⠑⣉⢠⡴⣶⣒⣢⣦⣦⣴⣾⣷⣿⣯⣿⣿⣿⣿⣿⣿⣼⣥⣤⣾⣿⣶⣾⣿⣶⣾⣴⣿⣷⣾⣶⣿⣿⣾⣷⣿⣿⣿⣿⣿⣿⣿⣿⡋⠉⢀⡠⠆⣀⣀⠠
⡰⢖⣿⣻⠏⠛⠁⠀⠀⠠⢠⣶⣭⣾⢿⣛⣿⡯⣴⣷⣷⣿⣿⣿⣿⣿⣿⣿⣿⡟⢿⢿⣿⣿⣿⣿⣾⣿⣿⣿⡿⢿⣿⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⣙⣾⣿⡋⠉⠃⠉⠀⠀
⠋⠉⠀⠀⠀⠀⠀⢄⣠⣴⠿⢫⣿⡷⣿⡹⠑⣱⣿⣿⣿⣋⠝⢋⡛⢿⣿⣿⣽⣿⣿⣾⡿⠻⣿⡟⢩⢻⣉⣿⢋⢂⢀⠄⢈⠋⢟⠟⢿⣿⣿⣿⢿⣿⢿⡿⣿⠫⣈⠑⠊⠉⠉⠉⠉
⡀⠀⠀⠀⠀⠀⣤⣾⢿⠿⣤⣾⡿⣱⣟⣷⣶⣿⡻⠹⣿⣏⠀⠨⠷⣼⣿⠿⣿⠿⠿⠿⠓⡖⢯⣣⡈⠨⣽⠏⠈⠈⠊⠀⠈⠂⠘⠆⣬⡿⠋⢩⡘⠟⠚⠓⠿⡦⣉⠂⡀⠀⠀⠀⠀
⠀⠀⠀⢀⡴⡾⡿⠃⣠⣼⣿⢿⡟⠛⠓⠒⠀⠀⠀⠀⠈⢷⣦⡄⠁⠈⠁⢀⠁⠀⠀⠐⠀⠐⢈⢊⢮⣿⠏⠀⠀⠀⠀⠀⠀⠀⢰⡽⠟⠀⣶⣿⡿⣇⠉⠛⢬⣧⠂⠑⠂⠁⠀⠀⠀
⠀⠀⢀⢽⡾⠋⢠⣾⢟⡾⠟⡟⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢿⣷⣤⡤⢀⢀⠠⢀⣀⡀⢀⣠⠶⠋⠀⠀⠀⠀⠀⠀⣀⣤⠖⠋⠀⣠⣾⣯⣟⣛⣾⡆⠀⠀⠹⡆⠀⠀⠀⠀⠀⠀
⠀⠀⡡⢉⣤⢞⡽⠒⠋⣴⠬⠼⠓⠒⠦⠤⠤⣀⣀⡀⠀⠀⠀⠀⠀⠛⠛⠛⠗⠿⠿⠛⠛⠋⠁⠀⠀⠀⠀⡀⠄⠐⠈⠀⢀⣠⣶⣿⣿⣷⡃⠈⢉⢼⠗⠀⠀⠰⠐⠀⠀⠀⠀⠀⠀
⠀⠀⢔⡿⢵⠟⠒⢉⣡⡴⠵⠒⠚⣲⠤⢖⡀⡀⠤⠈⠚⠛⠚⠶⠤⠤⠤⠄⠀⠀⠄⢀⠀⠀⠔⠒⠂⠉⠀⢀⣀⣤⣰⣵⣿⢿⣿⠿⣿⣿⣯⢊⠼⡋⣹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠡⠀⠈⠀⠐⠁⠀⠀⠀⠐⠾⣭⣶⠉⣼⡽⠛⡥⣢⢤⣤⣀⡀⠀⠀⠀⠀⠀⠀⡀⣀⢀⢀⣀⢠⣖⣽⡼⡧⣙⠿⢿⣷⡧⢉⣾⢠⡺⣿⠏⢈⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠁⡘⠀⠀⢄⠀⠠⢀⠀⢂⢼⠏⠀⣹⡟⠠⠀⣰⣘⣹⣡⡞⠛⣦⢱⢆⢑⢶⢤⡈⡖⣗⡷⣷⣥⡇⠈⣧⡇⢀⣠⣦⢿⣟⠋⠠⠳⠍⣼⠁⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⡠⢚⠋⠀⢰⠋⡆⠀⠀⠓⠁⣿⡏⣀⠀⠘⣞⡾⠃⢸⢿⢾⣡⣿⠄⠐⢽⡗⡀⣻⣇⡧⠟⢛⢉⡗⠀⠀⠀⢀⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⠁⠀⠀⠀⠹⠀⠕⠀⠠⠀⢀⢿⠁⠉⠛⢾⣿⣃⣀⣿⣿⠁⣿⡏⠀⠀⠀⣿⢁⠃⣏⠀⠀⠀⠸⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠛⠀⠀⢆⡎⠀⠈⣽⠋⢹⠘⣿⠙⠀⠁⠀⣿⠈⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⠀⠀⣺⠓⠊⠴⢄⣿⠒⠀⠀⢰⡇⠀⠁⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢀⠃⠡⠀⠀⢸⠀⠀⠀⠀⢘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠠⠀⣀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
