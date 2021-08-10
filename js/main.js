'use strict'

{
  const discs = document.querySelectorAll("div.box div");
  const message = document.querySelector("p#message");
  const turn = document.querySelector("p#turn");
  const skip = document.getElementById("skip");

  let turnColor = "black";
  let nextColor = "white";

  discs.forEach((disc, index) => {
    disc.addEventListener('click', function(){
      // console.log(index);
      if(disc.classList == "hide"){
        if(valiRight(index)
        || valiLeft(index)
        || valiUp(index)
        || valiDown(index)
        || valiRightUp(index)
        || valiRightDown(index)
        || valiLeftUp(index)
        || valiLeftDown(index)
        ) {
          reverse(index);
          disc.classList.add(turnColor);
          disc.classList.remove("hide");
          [turnColor, nextColor] = [nextColor, turnColor];
          turn.innerText = `${turnColor} の番です`;
          message.innerText = "";
        } else {
          message.innerText = "そこには置けません";
          return;
        }
      } else {
        message.innerText = "そこには置けません";
      }
    });
  });

  skip.addEventListener('click', function(){
    [turnColor, nextColor] = [nextColor, turnColor];
    turn.innerText = `${turnColor} の番です`;
    message.innerText = "";
  });

  function reverse(index) {
    reverseLeft(index);
    reverseRight(index);
    reverseUp(index);
    reverseDown(index);
    reverseRightUp(index);
    reverseRightDown(index);
    reverseLeftUp(index);
    reverseLeftDown(index);
  };


  function valiLeft(index) {
    let x = index % 8;
    let i = 0;
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
            break;
          } else {
            console.log("同じ色で挟んでいることになります");
            return true;
          }
        } else if  (discs[index - i].className == nextColor) {
          console.log("違う色なのでloopを続けます");
        } else {
          console.log( "エラーが起きています");
          break;
        }
      } else if (x === 0) {
        console.log("左端にあるからやめました");
        break;
      } else {
        console.log("左判定時にエラーが起きています");
        break;
      };
    };
  };

  function reverseLeft(index) {
    let x = index % 8;
    let i = 0;
    while (i < 7) {
      if (i < x && x > 0) {
        i++;
        if (discs[index - i].className == "hide") {
          return;
        } else if (discs[index - i].className == turnColor) {
          if (i === 1) {
            break;
          } else {
            for(let j = 0;j < i - 1; j++){
              discs[index - (j + 1)].classList.remove(nextColor);
              discs[index - (j + 1)].classList.add(turnColor);
            }
            return;
          }
        } else if  (discs[index - i].className == nextColor) {
          console.log("違う色なのでloopを続けます");
        } else {
          break;
        }
      } else if (x === 0) {
        break;
      } else {
        break;
      };
    };
  };



  function valiRight(index) {
    let x = index % 8;
    let i = 0;
    while (i < 7) {
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

  function reverseRight(index) {
    let x = index % 8;
    let i = 0;
    while (i < 7) {
      if (i + x < 7) {
        i++;
        if (discs[index + i].className == "hide") {
          return false;
        } else if (discs[index + i].className == turnColor) {
          if (i == 1) {
            return false;
          } else {
            console.log("同じ色で挟んでいることになります");
            for(let j = 0;j < i - 1; j++){
              discs[index + j + 1].classList.remove(nextColor);
              discs[index + j + 1].classList.add(turnColor);
            }
            console.log("右側の処理終了");
            return true;
          }
        } else if  (discs[index + i].className == nextColor) {
          console.log("違う色なのでloopを続けます");
        } else {
          break;
        }
      } else {
        break;
      };
    };
  }

  
  function valiUp(index) {
    let y = index / 8; //0~0.875とかになる
    let i = 0;
    while (i < 7) {
      i++;
      if (i < y && y >= 1) {
        if (discs[index - i * 8].className == "hide") {
          console.log("上にはないのでloopからでます");
          console.log("今回の判断では置けません");
          return false;
        } else if (discs[index - i * 8].className == turnColor) {
          if (i === 1) {
            console.log("初回で同じ色なのでloopからでます");
            break;
          } else {
            console.log("同じ色で挟んでいることになります");
            return true;
          }
        } else if  (discs[index - i * 8].className == nextColor) {
          console.log("違う色なのでloopを続けます");
          console.log(i);
        } else {
          console.log( "エラーが起きています");
          break;
        }
      } else if (y < 1) {
        console.log("上端にあるからやめました");
        break;
      } else {
        console.log("上判定時にエラーが起きています");
        break;
      };
    };
  };

  function reverseUp(index) {
    let y = index / 8; //0~0.875とかになる
    let i = 0;
    while (i < 7) {
      i++;
      if (i < y && y >= 1) {
        if (discs[index - i * 8].className == "hide") {
          return false;
        } else if (discs[index - i * 8].className == turnColor) {
          if (i === 1) {
            break;
          } else {
            for(let j = 0;j < i - 1; j++){
              discs[index - (j + 1) * 8].classList.remove(nextColor);
              discs[index - (j + 1) * 8].classList.add(turnColor);
              console.log(j);
            }
            return true;
          }
        } else if  (discs[index - i * 8].className == nextColor) {
          console.log("違う色なのでloopを続けます");
        } else {
          console.log( "エラーが起きています");
          break;
        }
      } else if (y < 1) {
        break;
      } else {
        break;
      };
    };
  };


  function valiDown(index) {
    let y = index / 8;
    let i = 0;
    while (i < 7) {
      console.log(i);
      if (i + y < 7) {
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

  function reverseDown(index) {
    let y = index / 8;
    let i = 0;
    while (i < 7) {
      if (i + y < 7) {
        i++;
        if (discs[index + i * 8].className == "hide") {
          return false;
        } else if (discs[index + i * 8].className == turnColor) {
          if (i == 1) {
            return false;
          } else {
            for(let j = 0;j < i - 1; j++){
              discs[index + (j + 1) * 8].classList.remove(nextColor);
              discs[index + (j + 1) * 8].classList.add(turnColor);
            }
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
    let x = index % 8;
    let y = index / 8; //0~0.875とかになる
    let i = 0;
    while (i < 7) {
      i++;
      if (i < y && y >= 1 && x + 1 < 7) {
        if (discs[index - i * 8 + i].className == "hide") {
          console.log("右上にはないのでloopからでます");
          console.log("今回の判断では置けません");
          return false;
        } else if (discs[index - i * 8 + i].className == turnColor) {
          if (i === 1) {
            console.log("初回で同じ色なのでloopからでます");
            break;
          } else {
            console.log("同じ色で挟んでいることになります");
            console.log("右上の処理終了");
            return true;
          }
        } else if  (discs[index - i * 8 + i].className == nextColor) {
          console.log("違う色なのでloopを続けます");
        } else {
          console.log( "エラーが起きています");
          break;
        }
      } else if (y < 1) {
        console.log("上端にあるからやめました");
        break;
      } else {
        console.log("上判定時にエラーが起きています");
        break;
      };
    };
  };

  function reverseRightUp(index) {
    let x = index % 8;
    let y = index / 8; //0~0.875とかになる
    let i = 0;
    while (i < 7) {
      i++;
      if (i < y && y >= 1 && x + 1 < 7) {
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

  function  valiRightDown(index) {
    let x = index % 8;
    let y = index / 8;
    let i = 0;
    while (i < 7) {
      console.log(i);
      if (i + y < 7 && i + x < 7) {
        i++;
        if (discs[index + i * 8 + i].className == "hide") {
          console.log("右下にはないのでloopからでます(false)");
          return false;
        } else if (discs[index + i * 8 + i].className == turnColor) {
          if (i == 1) {
            console.log("初回で同じ色なのでloopからでます");
            return false;
          } else {
            console.log("同じ色で挟んでいることになります");
            console.log("下側の処理終了");
            return true;
          }
        } else if  (discs[index + i * 8 + i].className == nextColor) {
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

  function  reverseRightDown(index) {
    let x = index % 8;
    let y = index / 8;
    let i = 0;
    while (i < 7) {
      console.log(i);
      if (i + y < 7 && i + x < 7) {
        i++;
        if (discs[index + i * 8 + i].className == "hide") {
          console.log("右下にはないのでloopからでます(false)");
          return false;
        } else if (discs[index + i * 8 + i].className == turnColor) {
          if (i == 1) {
            console.log("初回で同じ色なのでloopからでます");
            return false;
          } else {
            console.log("同じ色で挟んでいることになります");
            for(let j = 0;j < i - 1; j++){
              discs[index + (j + 1) * 8 + (j + 1)].classList.remove(nextColor);
              discs[index + (j + 1) * 8 + (j + 1)].classList.add(turnColor);
            }
            console.log("下側の処理終了");
            return true;
          }
        } else if  (discs[index + i * 8 + i].className == nextColor) {
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



  function valiLeftUp(index) {
    let x = index % 8;
    let y = index / 8; //0~0.875とかになる
    let i = 0;
    while (i < 7) {
      i++;
      if (i < x && x > 0 && i < y && y >= 1) {
        if (discs[index - i * 8 - i].className == "hide") {
          console.log("左上にはないのでloopからでます");
          console.log("今回の判断では置けません");
          return false;
        } else if (discs[index - i * 8 - i].className == turnColor) {
          if (i === 1) {
            console.log("初回で同じ色なのでloopからでます");
            break;
          } else {
            console.log(i);
            console.log("同じ色で挟んでいることになります");
            console.log("右上の処理終了");
            return true;
          }
        } else if  (discs[index - i * 8 - i].className == nextColor) {
          console.log("違う色なのでloopを続けます");
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


  function reverseLeftUp(index) {
    let x = index % 8;
    let y = index / 8; //0~0.875とかになる
    let i = 0;
    while (i < 7) {
      i++;
      if (i < x && x > 0 && i < y && y >= 1) {
        if (discs[index - i * 8 - i].className == "hide") {
          return false;
        } else if (discs[index - i * 8 - i].className == turnColor) {
          if (i === 1) {
            break;
          } else {
            console.log("同じ色で挟んでいることになります");
            for(let j = 0;j < i - 1; j++){
              discs[index - (j + 1) * 8 - (j + 1)].classList.remove(nextColor);
              discs[index - (j + 1) * 8 - (j + 1)].classList.add(turnColor);
            }
            console.log("右上の処理終了");
            return true;
          }
        } else if  (discs[index - i * 8 - i].className == nextColor) {
          console.log("違う色なのでloopを続けます");
        } else {
          console.log( "エラーが起きています");
          break;
        }
      } else if (y < 1) {
        console.log("上端にあるからやめました");
        break;
      } else {
        console.log("上判定時にエラーが起きています");
        break;
      };
    };
  };


  function  valiLeftDown(index) {
    let x = index % 8;
    let y = index / 8;
    let i = 0;
    while (i < 7) {
      if (i < x && x > 0 && i + y < 7) {
        i++;
        if (discs[index + i * 8 - i].className == "hide") {
          console.log("左下にはないのでloopからでます(false)");
          return false;
        } else if (discs[index + i * 8 - i].className == turnColor) {
          if (i == 1) {
            console.log("初回で同じ色なのでloopからでます");
            return false;
          } else {
            console.log("同じ色で挟んでいることになります");
            console.log("下側の処理終了");
            return true;
          }
        } else if  (discs[index + i * 8 - i].className == nextColor) {
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

  function  reverseLeftDown(index) {
    let x = index % 8;
    let y = index / 8;
    let i = 0;
    while (i < 7) {
      console.log(i);
      if (i < x && x > 0 && i + y < 7) {
        i++;
        if (discs[index + i * 8 - i].className == "hide") {
          return false;
        } else if (discs[index + i * 8 - i].className == turnColor) {
          if (i == 1) {
            return false;
          } else {
            for(let j = 0;j < i - 1; j++){
              discs[index + (j + 1) * 8 - (j + 1)].classList.remove(nextColor);
              discs[index + (j + 1) * 8 - (j + 1)].classList.add(turnColor);
            }
            return true;
          }
        } else if  (discs[index + i * 8 - i].className == nextColor) {
          console.log("違う色なのでloopを続けます");
        } else {
          break;
        }
      } else {
        break;
      };
    };
  }






}