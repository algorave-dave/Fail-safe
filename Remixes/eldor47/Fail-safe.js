/* @title    Fail-safe
   @by       DJ_Dave
   @license  CC BY-NC-SA (https://creativecommons.org/licenses/by-nc-sa/4.0/)

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
*/
  
// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

function blockArrange(patArr, modifiers = []) {
  return stack(
    ...patArr.map(([pat, maskPat]) => {
      pat = [pat].flat()
      
      return maskPat.fmap(m => {
       return stack(...pat.map(p => {
        
         if (m == 0) {
           return
         }
         const ms = m.toString()
         let newPat = p
         
         if (ms.includes('R')){
           newPat = newPat.restart(1)
         }
         if (ms.includes('B')) {
           newPat = newPat.rev().speed(-1)
         }
         modifiers.forEach(([mod, callback]) => {
          if (mod(ms)) {
           newPat = callback(newPat)
         } 
         })
         return newPat
       }).filter(Boolean))
      }).innerJoin()
    }).flat()
  ) 
}
// ^ some code from Switch Angel that makes the structure below possible

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

samples('github:tidalcycles/dirt-samples')
// ^ all of my samples are in my github folder, and a bunch of drum samples are from this tidalcycles library on github

setCps(140/60/4)

const Structures = [
  "{~}",
  "x*4",
]
// ^ this is where I have my kick patterns defined

const beat = 01
// ^ this is where I choose which kick pattern to play

const energy = slider(10000, 300, 10000)
// ^ this slider controls the HPF of the bassline and one of the perc elements

const kick =  s("tech:5").duck(2).postgain(5.5).duckdepth(1).duckattack("0.15:0.25").hpf(75).speed(0.5).end(0.2).struct(pick(Structures, beat))
const clap = s(" [ ~ cp]").bank("[KorgDDM110, RolandTR707]").speed(0.8).postgain(0.2).end(0.5).fast(2)
const hhc =  s("{hh*16}%1").postgain(0.35).room(0.5).bank("RolandTR808").lpf(10000).speed(1).end(0.1).distort(1).gain(0.5).o(2)
const hhc2 =  s("{hh*16}%1").postgain(0.2).room(0.5).bank("ace").lpf(5000).speed(0.7).end(0.2).distort(1).gain(0.4).o(2).jux(rev)
const hho =   s("~ hh").bank("RolandTR808").speed(0.5).gain(0.7).fast(4).room(0).o(2)
const perc =  s("psr:[2|12|24|25]".fast(8)).hpf(2000).speed(1).gain(0.25).ply(2).o(2).lpf(energy).jux(rev)
const breaks =  s("breaks165").gain(0.5).loopAt(1).chop(16).fit().o(2).jux(rev)
const fx = s("fx").struct("- x".fast(4)).gain(2).end(0.5)


const lead = n(irand("6").seg(8).slow(2)).scale("c#4:minor:pentatonic")
  .fast("[8]").slow(4).trans("[12,0]")
  .sound("[supersaw, square]").delay(0.1)
  .room(1).rfade(30)
  .lpf(slider(4000, 300, 4000))//.sometimes(jux(rev))
  .almostNever(mask(0)).postgain(0.3).ribbon("<4 5>".slow(2), 1).o(2)

const bassline = note("{c#3@3 a2@2 e2@3 c#3@0.5 f#2@2.5 a2@2 e2@3}%8"
  .seg(16).slow(2))
  .trans("[0, -12]")
  .rarely(trans("12"))
  .distort(2)
  .sound("[supersaw, square]")
  .postgain(0.18)//.hpf(150)
  .lpf(energy).o(2)

const chops = s("CHOPS").clip(1).note("c2").postgain(0.6)//.trans(5)
  .jux(rev).room(0.5).delay(1).lpf(slider(3000, 300, 3000))
.slice(16, "[0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15]".fast(4)).ply(2).o(2)

const bg_vox = s("BG_VOX").loopAt(8).chop(4).clip(1).o(2).postgain(1)

const gang = s("GANG_VOX").loopAt(8).chop(16).clip(1).o(2).postgain(1.5)

const verse1 = s("VERSE1").loopAt(16).slice(2, "1 0".slow(16)).chop(16).clip(1).o(2).postgain(1)

const verse2 = s("VERSE2").loopAt(16).slice(2, "1 0".slow(16)).chop(16).clip(1).o(2).postgain(1)

// all the above const's are controlled by the below "blockArrange". They work kind of like stems, where if you isolate any of them, you'll hear the sample and its structure played out. I put all of these elements as loops at the bottom of the file for easier editing, so skip down there if you want everything in loops.

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

_$: blockArrange(
  [ 
    [[kick],       "<0@7.5 0@0.5 1@8 1@7 0 1@8 1@8 0@0.25 1@7.75 1@7 0                       0@8 0@8 0@8   1@8 1@7.5 0@0.5 1@8 1@7 0@0 1@8 0@100>"],
    [[clap],       "<W@7.5 0@0.5 1@8 1@8   0@2 0@2 0@2 0@2 0@2 0@2 0@2 0@2 0@0.25 1@7.75 1@8 0@8 0@8 Z@7 0 1@8 1@8 1@8 1@8 0@100>"],
    [[perc],       "<0@7.5 0@0.5 1@8 1@8   0@2 1@2 0@2 1@2 0@2 1@2 0@2 1@2 0@0.25 1@7.75 1@8 0@8 0@8 Z@7 0 1@8 1@8 1@8 1@8 Y@8 0@100>"],
    [[hhc],        "<0@7.5 0@0.5 1@8 1@8   0@2 1@2 0@2 1@2 0@2 1@2 0@2 1@2 0@0.25 1@7.75 1@8 0@8 Y@8 Z@7 0 1@8 1@8 1@8 1@8 0@100>"],
    [[hho],        "<X@7.5 0@0.5 1@8 1@8   0@2 0@2 0@2 0@2 0@2 0@2 0@2 Z@2 0@0.25 1@7.75 1@8 0@8 Y@8 Z@7 0 1@8 1@8 1@8 1@8 0@100>"],
    [[fx],         "<0@7.5 0@0.5 0@8 0@8   0@2 0@2 0@2 0@2 0@2 0@2 0@2 0@2 1@0.25 0@128 0@100>"],
    
    
    [[lead],       "<V@4 X@3.5 Y@0.5 0@8 0@8 0@8 0@8 0@8 0@8 0@8 0@8>"], 
    [[bg_vox],     "<0@8 1@7.5 1@0.5 1@8 0@8         0@8 0@8 0@8 X@8 Y@8 W@7.5 1@0.5 1@8 1@8   1@8 1@8 0@100>"], 
    [[chops],      "<S 0@3 S 0@3   0@8 0@8 0@8 0@2 W@2 0@2     X@2 0@2 Y@2 0@2 Z@2 0@2 1@2 0@2 1@2 0@2 0@32  1@2 0@2 1@2 1@100>"], 
    [[verse1],    "<0@8 0@8 0@8 1@8 1@8 0@8 0@8 0@8    0@1000>"], 
    [[verse2],    "<0@8 0@8 0@8 0@8 0@8 1@8 1@8                0@8 X@8 Y@8 0@8 0@8 0@8 0@8 0@100         0@8 0@8   0@8 0@8 0@100>"], 
    [[gang],       "<0@8 0@8 0@8 0@8 0@8 0@8 0@8                W@8 X@8 Y@8 0@8 0@8 Y@8 Z@8 0@100>"], 

    
    [[bassline],   "<V@4 W@3.5 0@0.5 1@8 1@8 W@8 W@8 0@0.25 Z@7.75 Z@8 W@8 X@8 Y@7.5 0@0.5 1@8 1@8 1@8 1@8 Y@8 W@100>"],
    // [[pad],        "<1@8 1@7.5 0@0.5 0@8 0@8         0@8 W@8 X@8 X@8 1@8 1@7.5 0@0.5 0@8 0@8   1@8 1@8 0@100>"],
  ],
  
  [[(m) => m.includes('S') , (x) => x.lpf(1000)],
   [(m) => m.includes('T') , (x) => x.hpf(600)],
   [(m) => m.includes('G') , (x) => x.ply(4)],
   [(m) => m.includes('V') , (x) => x.lpf(200)],
   [(m) => m.includes('W') , (x) => x.lpf(500)],
   [(m) => m.includes('X') , (x) => x.lpf(1000)],
   [(m) => m.includes('Y') , (x) => x.lpf(2500)],
   [(m) => m.includes('Z') , (x) => x.lpf(5000)],
   [(m) => m.includes('A') , (x) => x.room(0.75)],
  ]
) 
// ^ this is the whole song structure  

.punchcard({vertical:true})
// ^comment this out if you dont want to see the punchcard

.theme("bluescreen")
// ^comment this out if you want to change the theme, then you can change it in settings

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// below are all the instrument and vocal loops unstructured. remove/add the _ to play/stop each loop.

DRUMS: stack (
  s("tech:5").duck(2).postgain(5.5).duckdepth(0.9).duckattack("0.15:0.25").hpf(75).speed(0.5).end(0.2).struct(pick(Structures, beat)),
  s(" [ ~ cp]").bank("[KorgDDM110, RolandTR707]").speed(0.8).postgain(0.2).end(0.5).fast(2),
  // s("{hh*16}%1").postgain(0.35).room(0.5).bank("RolandTR808").lpf(10000).speed(1).end(0.1).distort(1).gain(0.5).o(2),
  // s("{hh*16}%1").postgain(0.2).room(0.5).bank("ace").lpf(5000).speed(0.7).end(0.2).distort(1).gain(0.4).o(2).jux(rev),
  s("~ hh").bank("RolandTR808").speed(0.5).gain(0.7).fast(4).room(0).o(2),
  // s("psr:[2|12|24|25]".fast(8)).hpf(2000).speed(1).gain(0.25).ply(2).o(2).lpf(energy).jux(rev),
  // s("breaks165").gain(0.5).loopAt(1).chop(16).fit().o(2).jux(rev),
  // s("FX").struct("- x".fast(4)).gain(2).end(0.5)
)

_LEAD: n(irand("6").seg(8).slow(2)).scale("c#4:minor:pentatonic")
  .fast("[8]").slow(4).trans("[12,0]")
  .sound("[supersaw, square]").delay(0.1)
  .room(1).rfade(30)
  .lpf(slider(4000, 300, 4000))
  .almostNever(mask(0)).postgain(0.3).ribbon("<4 5>".slow(2), 1).o(2)


BASSLINE: note("{c#3@3 a2@2 e2@3 c#3@0.5 f#2@2.5 a2@2 e2@3}%8"
  .seg(16).slow(2)).trans("[0, -12]").rarely(trans("12"))
  .sound("[supersaw, square]").distort(2)
  .postgain(0.18).hpf(150).lpf(energy).o(2)

CHOPS: s("CHOPS").clip(1).note("c2").distort(1).postgain(0.1)
  .jux(rev).room(0.5).delay(1).lpf(slider(3000, 300, 3000))
.slice(16, "[0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15]".fast(4)).ply(2).o(2)

_BG_VOX: s("BG_VOX").loopAt(8).chop(4).clip(1).o(2).postgain(1)

_GANG_VOX: s("GANG_VOX").loopAt(8).chop(16).clip(1).o(2).postgain(1.5)

_VERSE1: s("VERSE1").loopAt(16).slice(2, "1 0".slow(16)).chop(16).clip(1).o(2).postgain(1)

_VERSE2: s("VERSE2").loopAt(16).slice(2, "1 0".slow(16)).chop(16).clip(1).o(2).postgain(1)
