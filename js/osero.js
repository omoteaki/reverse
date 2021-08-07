window.addEventListener("load", () => {

  const boxs = document.querySelectorAll(".box");
  const discs = document.querySelectorAll("div.box div");

  var turnColor = "black";
  var nextColor = "white";
  // console.log(discs[5].className);

  discs.forEach((disc, index) => {
    disc.addEventListener('click', function(){
      console.log(index);

      if(valiRight(index)
      || valiLeft(index)
      || valiUp(index)
      || valiRightUp(index)
      || valiDown(index)
      || valiRightDown(index)) {
        disc.classList.add(turnColor);
        disc.classList.remove("hide");
        [turnColor, nextColor] = [nextColor, turnColor];
      }
    });
  });

  
  function valiLeft(index) {
    var result = false;
    var x = index % 8;
    let i = 0;
      // console.log(i);
      while (i < 7) {
        if (i < x && x > 0) {
          i++;
          if (discs[index - i].className == "hide") {
            console.log("左にはないのでloopからでます");
            console.log("今回の判断では置けません");
            return false;
          } else if (discs[index - i].className == turnColor) {
            if (i === 1) {
              console.log("初回で同じ色なのでloopからでます");
              // console.log(i);
              break;
            } else {
              console.log(i);
              console.log("同じ色で挟んでいることになります");
              for(let j = 0;j < i - 1; j++){
                discs[index - (j + 1)].classList.remove(nextColor);
                discs[index - (j + 1)].classList.add(turnColor);
                console.log(j);
              }
              console.log("処理終了");
              result = true;
              return result;
            }
          } else if  (discs[index - i].className == nextColor) {
            console.log("違う色なのでloopを続けます");
            // break;
          } else {
            console.log( "エラーが起きています");
            break;
          }
        } else if (x === 0) {
          console.log(i);
          console.log("左端にあるからやめました");
          break;
        } else {
          console.log("左判定時にエラーが起きています");
          break;

        };
      };
    };
  function valiRight(index) {
    var x = index % 8;
    let i = 0;
    while (i < 7) {
      // console.log(i);
      if (i + x < 7) {
        i++;
        if (discs[index + i].className == "hide") {
          console.log("右にはないのでloopからでます(false)");
          return false;
        } else if (discs[index + i].className == turnColor) {
          if (i == 1) {
            console.log("初回で同じ色なのでloopからでます");
            return false;
          } else {
            console.log("同じ色で挟んでいることになります");
            for(let j = 0;j < i - 1; j++){
              discs[index + j + 1].classList.remove(nextColor);
              discs[index + j + 1].classList.add(turnColor);
              // console.log(j);
            }
            console.log("右側の処理終了");
            return true;
          }
        } else if  (discs[index + i].className == nextColor) {
          console.log("違う色なのでloopを続けます");
        } else {
          console.log( "エラーが起きています");
          break;
        }
      } else {
        console.log("右端にあるからやめました");
        break;
      };
    };
  }
  function valiUp(index) {
    var y = index / 8; //0~0.875とかになる
    console.log('dddd');
    console.log(y);
    let i = 0;
      console.log(i);
      while (i < 7) {
        if (i < y && y >= 1) {
          i++;
          if (discs[index - i * 8].className == "hide") {
            console.log("上にはないのでloopからでます");
            console.log("今回の判断では置けません");
            return false;
          } else if (discs[index - i * 8].className == turnColor) {
            if (i === 1) {
              console.log("初回で同じ色なのでloopからでます");
              // console.log(i);
              break;
            } else {
              console.log(i);
              console.log("同じ色で挟んでいることになります");
              for(let j = 0;j < i - 1; j++){
                discs[index - (j + 1) * 8].classList.remove(nextColor);
                discs[index - (j + 1) * 8].classList.add(turnColor);
                console.log(j);
              }
              console.log("上の処理終了");
              return true;
            }
          } else if  (discs[index - i * 8].className == nextColor) {
            console.log("違う色なのでloopを続けます");
            // break;
          } else {
            console.log( "エラーが起きています");
            break;
          }
        } else if (y < 1) {
          console.log(i);
          console.log("上端にあるからやめました");
          break;
        } else {
          console.log("上判定時にエラーが起きています");
          break;

        };
      };
    };
  function valiDown(index) {
    var y = index / 8;
    let i = 0;
    while (i < 7) {
      console.log(i);
      if (y < 7) {
        i++;
        if (discs[index + i * 8].className == "hide") {
          console.log("下にはないのでloopからでます(false)");
          return false;
        } else if (discs[index + i * 8].className == turnColor) {
          if (i == 1) {
            console.log("初回で同じ色なのでloopからでます");
            return false;
          } else {
            console.log("同じ色で挟んでいることになります");
            for(let j = 0;j < i - 1; j++){
              discs[index + (j + 1) * 8].classList.remove(nextColor);
              discs[index + (j + 1) * 8].classList.add(turnColor);
              // console.log(j);
            }
            console.log("下側の処理終了");
            return true;
          }
        } else if  (discs[index + i * 8].className == nextColor) {
          console.log("違う色なのでloopを続けます");
        } else {
          console.log("エラーが起きています");
          break;
        }
      } else {
        console.log("下端にあるからやめました");
        break;
      };
    };
  }
  function valiRightUp(index) {
    var x = index % 8;
    var y = index / 8; //0~0.875とかになる
    console.log('dddd');
    console.log(y);
    let i = 0;
      console.log(i);
      while (i < 7) {
        if (i < y && y >= 1 && x + 1 < 7) {
          i++;
          if (discs[index - i * 8 + i].className == "hide") {
            console.log("右上にはないのでloopからでます");
            console.log("今回の判断では置けません");
            return false;
          } else if (discs[index - i * 8 + i].className == turnColor) {
            if (i === 1) {
              console.log("初回で同じ色なのでloopからでます");
              // console.log(i);
              break;
            } else {
              console.log(i);
              console.log("同じ色で挟んでいることになります");
              for(let j = 0;j < i - 1; j++){
                discs[index - (j + 1) * 8 + (j + 1)].classList.remove(nextColor);
                discs[index - (j + 1) * 8 + (j + 1)].classList.add(turnColor);
                console.log(j);
              }
              console.log("右上の処理終了");
              return true;
            }
          } else if  (discs[index - i * 8 + i].className == nextColor) {
            console.log("違う色なのでloopを続けます");
            // break;
          } else {
            console.log( "エラーが起きています");
            break;
          }
        } else if (y < 1) {
          console.log(i);
          console.log("上端にあるからやめました");
          break;
        } else {
          console.log("上判定時にエラーが起きています");
          break;

        };
      };
    };
  //   function  valiRightDown(index) {
  //   var y = index / 8;
  //   let i = 0;
  //   while (i < 7) {
  //     console.log(i);
  //     if (y < 7) {
  //       i++;
  //       if (discs[index + i * 8].className == "hide") {
  //         console.log("下にはないのでloopからでます(false)");
  //         return false;
  //       } else if (discs[index + i * 8].className == turnColor) {
  //         if (i == 1) {
  //           console.log("初回で同じ色なのでloopからでます");
  //           return false;
  //         } else {
  //           console.log("同じ色で挟んでいることになります");
  //           for(let j = 0;j < i - 1; j++){
  //             discs[index + (j + 1) * 8].classList.remove(nextColor);
  //             discs[index + (j + 1) * 8].classList.add(turnColor);
  //             // console.log(j);
  //           }
  //           console.log("下側の処理終了");
  //           return true;
  //         }
  //       } else if  (discs[index + i * 8].className == nextColor) {
  //         console.log("違う色なのでloopを続けます");
  //       } else {
  //         console.log("エラーが起きています");
  //         break;
  //       }
  //     } else {
  //       console.log("下端にあるからやめました");
  //       break;
  //     };
  //   };
  // }







});
