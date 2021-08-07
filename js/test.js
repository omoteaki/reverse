window.addEventListener("load", () => {




  const boxs = document.querySelectorAll(".box");

  console.log(boxs);
  
  
  //マス目を押したら、石を置く
  boxs.forEach((box, index) => {
    box.addEventListener('click', function(){
      console.log(index);
      console.log();
      const div = document.createElement('div');
      div.classList.add('white','disc');
      box.appendChild(div);

      // const color = boxs[index + 1].classList.contains("black")
      reverseColor(index);

    });
  });

  const reverseColor = (index) => {
    reverseColorRight(index);
    reverseColorLeft(index);
    reverseColorUp(index);
    reverseColorDown(index);
    reverseColorRightDown(index);
    reverseColorLeftDown(index);
    reverseColorRightUp(index);
    reverseColorLeftUp(index);
  }

  //indexは横方向
  //右方向
  const reverseColorRight = (index) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index + i < 64; i++) {
      //隣のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index + i].firstChild == null) {
        console.log('変化なし1');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index + i].firstChild.classList.contains("white")) {
        for(let j = 1; j < i; j++){
          boxs[index + j].firstChild.classList.remove("black");
          boxs[index + j].firstChild.classList.add("white");
        }
        return
      }
    }

  };

  //左方向
  const reverseColorLeft = (index) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index - i >= 0; i++) {
      if(boxs[index - i].firstChild == null) {
        console.log('変化なし2');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index - i].firstChild.classList.contains("white")) {
        for(let j = 1; j < i; j++){
          boxs[index - j].firstChild.classList.remove("black");
          boxs[index - j].firstChild.classList.add("white");
        }
        return
      }
    }


  };
  //上方向
  const reverseColorUp = (index) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index - i * 8 >= 0; i++) {
      if(boxs[index - i * 8].firstChild == null) {
        console.log('変化なし3');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index - i * 8].firstChild.classList.contains("white")) {
        for(let j = 1; j < i; j++){
          boxs[index - j * 8].firstChild.classList.remove("black");
          boxs[index - j * 8].firstChild.classList.add("white");
        }
        return
      }
    }


  };

  //下方向
  const reverseColorDown = (index) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index + i * 8 < 64; i++) {
      //隣のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index + i * 8].firstChild == null) {
        console.log('変化なし4');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index + i * 8].firstChild.classList.contains("white")) {
        for(let j = 1; j < i; j++){
          boxs[index + j * 8].firstChild.classList.remove("black");
          boxs[index + j * 8].firstChild.classList.add("white");
        }
        return
      }
    }

  };


  //右下方向
  const reverseColorRightDown = (index) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index + i + (i * 8) < 64; i++) {
      //右下のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index + i + (i * 8)].firstChild == null) {
        console.log('変化なし5');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index + i + (i * 8)].firstChild.classList.contains("white")) {
        for(let j = 1; j < i; j++){
          boxs[index + j + (j * 8)].firstChild.classList.remove("black");
          boxs[index + j + (j * 8)].firstChild.classList.add("white");
        }
        return
      }
    }

  };
  //左下方向
  const reverseColorLeftDown = (index) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index - i + (i * 8) < 64; i++) {
      //右下のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index - i + (i * 8)].firstChild == null) {
        console.log('変化なし6');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index - i + (i * 8)].firstChild.classList.contains("white")) {
        for(let j = 1; j < i; j++){
          boxs[index - j + (j * 8)].firstChild.classList.remove("black");
          boxs[index - j + (j * 8)].firstChild.classList.add("white");
        }
        return
      }
    }

  };
  //右上方向
  const reverseColorRightUp = (index) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index + i - (i * 8) >= 0; i++) {
      //右下のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index + i - (i * 8)].firstChild == null) {
        console.log('変化なし5');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index + i - (i * 8)].firstChild.classList.contains("white")) {
        for(let j = 1; j < i; j++){
          boxs[index + j - (j * 8)].firstChild.classList.remove("black");
          boxs[index + j - (j * 8)].firstChild.classList.add("white");
        }
        return
      }
    }

  };
  //左上方向
  const reverseColorLeftUp = (index) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index - i - (i * 8) >= 0; i++) {
      //右下のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index - i - (i * 8)].firstChild == null) {
        console.log('変化なし6');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index - i - (i * 8)].firstChild.classList.contains("white")) {
        for(let j = 1; j < i; j++){
          boxs[index - j - (j * 8)].firstChild.classList.remove("black");
          boxs[index - j - (j * 8)].firstChild.classList.add("white");
        }
        return
      }
    }

  };



});

  //ひっくり返す場所を調べる
  ////自分の隣が同じ色ならストップ
  ////自分の隣が違う色ならさらに隣を見て、自分と同じ色が出るまで確認
  ////確認した先で同じ色を見つけたらそこまでをひっくり返す
  //上下方向

  //左右方向

  //斜め方向


// if(boxs[index + 1].firstChild == null || boxs[index + 1].firstChild.classList.contains("white")) {
//   console.log('変化なし');
// }else{
//   console.log('正しくないからさらに右を見ます');
//   if(boxs[index + 2].firstChild.classList.contains("white")) {
//     console.log('自分の色で挟んでいるので挟んでいる色を変えます');
//     boxs[index + 1].firstChild.classList.remove("black");
//     boxs[index + 1].firstChild.classList.add("white");
//   }else{
//     console.log('正しくないからさらに右を見ます');
//     if(boxs[index + 3].firstChild.classList.contains("white")) {
//       console.log('自分の色で挟んでいるので挟んでいる色を変えます');
//       boxs[index + 1].firstChild.classList.remove("black");
//       boxs[index + 1].firstChild.classList.add("white");
//       boxs[index + 2].firstChild.classList.remove("black");
//       boxs[index + 2].firstChild.classList.add("white");
//     }else{
//       console.log('正しくないからさらに右を見ます');
      
//     }
//   }
// }



window.addEventListener("load", () => {




  const boxs = document.querySelectorAll(".box");

  console.log(boxs);
  
  // const blackPlayer = document.getElementById("black");
  // const whitePlayer = document.getElementById("white");

  


    //マス目を押したら、石を置く
    var colorA = "black";
    var colorB = "white";

// function game(colorA, colorB) {
  boxs.forEach((box, index) => {
    box.addEventListener('click', function(){
      console.log(index);
      const div = document.createElement('div');

      div.classList.add(colorA,'disc');
      box.appendChild(div);

      // const color = boxs[index + 1].classList.contains("black")
      reverseColor(index, colorA, colorB);
      [colorA, colorB] = [colorB, colorA];
    });
  });
// };


  const reverseColor = (index, colorA, colorB) => {
    reverseColorRight(index, colorA, colorB);
    reverseColorLeft(index, colorA, colorB);
    reverseColorUp(index, colorA, colorB);
    reverseColorDown(index, colorA, colorB);
    reverseColorRightDown(index, colorA, colorB);
    reverseColorLeftDown(index, colorA, colorB);
    reverseColorRightUp(index, colorA, colorB);
    reverseColorLeftUp(index, colorA, colorB);
  }

  //indexは横方向
  //右方向
  const reverseColorRight = (index, colorA, colorB) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index + i < 64; i++) {
      //隣のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index + i].firstChild == null) {
        console.log('変化なし1');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index + i].firstChild.classList.contains(colorA)) {
        for(let j = 1; j < i; j++){
          boxs[index + j].firstChild.classList.remove(colorB);
          boxs[index + j].firstChild.classList.add(colorA);
        }
        return
      }
    }

  };

  //左方向
  const reverseColorLeft = (index, colorA, colorB) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index - i >= 0; i++) {
      if(boxs[index - i].firstChild == null) {
        console.log('変化なし2');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index - i].firstChild.classList.contains(colorA)) {
        for(let j = 1; j < i; j++){
          boxs[index - j].firstChild.classList.remove(colorB);
          boxs[index - j].firstChild.classList.add(colorA);
        }
        return
      }
    }


  };
  //上方向
  const reverseColorUp = (index, colorA, colorB) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index - i * 8 >= 0; i++) {
      if(boxs[index - i * 8].firstChild == null) {
        console.log('変化なし3');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index - i * 8].firstChild.classList.contains(colorA)) {
        for(let j = 1; j < i; j++){
          boxs[index - j * 8].firstChild.classList.remove(colorB);
          boxs[index - j * 8].firstChild.classList.add(colorA);
        }
        return
      }
    }


  };

  //下方向
  const reverseColorDown = (index, colorA, colorB) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index + i * 8 < 64; i++) {
      //隣のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index + i * 8].firstChild == null) {
        console.log('変化なし4');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index + i * 8].firstChild.classList.contains(colorA)) {
        for(let j = 1; j < i; j++){
          boxs[index + j * 8].firstChild.classList.remove(colorB);
          boxs[index + j * 8].firstChild.classList.add(colorA);
        }
        return
      }
    }

  };


  //右下方向
  const reverseColorRightDown = (index, colorA, colorB) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index + i + (i * 8) < 64; i++) {
      //右下のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index + i + (i * 8)].firstChild == null) {
        console.log('変化なし5');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index + i + (i * 8)].firstChild.classList.contains(colorA)) {
        for(let j = 1; j < i; j++){
          boxs[index + j + (j * 8)].firstChild.classList.remove(colorB);
          boxs[index + j + (j * 8)].firstChild.classList.add(colorA);
        }
        return
      }
    }

  };
  //左下方向
  const reverseColorLeftDown = (index, colorA, colorB) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index - i + (i * 8) < 64; i++) {
      //右下のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index - i + (i * 8)].firstChild == null) {
        console.log('変化なし6');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index - i + (i * 8)].firstChild.classList.contains(colorA)) {
        for(let j = 1; j < i; j++){
          boxs[index - j + (j * 8)].firstChild.classList.remove(colorB);
          boxs[index - j + (j * 8)].firstChild.classList.add(colorA);
        }
        return
      }
    }

  };
  //右上方向
  const reverseColorRightUp = (index, colorA, colorB) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index + i - (i * 8) >= 0; i++) {
      //右下のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index + i - (i * 8)].firstChild == null) {
        console.log('変化なし5');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index + i - (i * 8)].firstChild.classList.contains(colorA)) {
        for(let j = 1; j < i; j++){
          boxs[index + j - (j * 8)].firstChild.classList.remove(colorB);
          boxs[index + j - (j * 8)].firstChild.classList.add(colorA);
        }
        return
      }
    }





  };
  //左上方向
  const reverseColorLeftUp = (index, colorA, colorB) => {
    const box = boxs[index];
    const disc = box.firstChild;
    console.log(index);
    console.log(disc);

    for(let i = 1; i < 8 && index - i - (i * 8) >= 0; i++) {
      //右下のマスに石がない(終了)  (2回目以降さらにとなりには何もなかった=>挟めない)
      if(boxs[index - i - (i * 8)].firstChild == null) {
        console.log('変化なし6');
        return
      //自分と同じ色だったら最初の1回目は終了(2回目は挟める=>間の色を変える)
      } else if (boxs[index - i - (i * 8)].firstChild.classList.contains(colorA)) {
        for(let j = 1; j < i; j++){
          boxs[index - j - (j * 8)].firstChild.classList.remove(colorB);
          boxs[index - j - (j * 8)].firstChild.classList.add(colorA);
        }
        return
      }
    }

  };


  // blackPlayer.addEventListener('click', function(){
  //   console.log('黒');
  //   var colorA = "black";
  //   var colorB = "white";
  //   game(colorA, colorB);
  // });

  // whitePlayer.addEventListener('click', function(){
  //   console.log('白');
  //   var colorA = "white";
  //   var colorB = "black";
  //   game(colorA, colorB);
  // });


});

  //ひっくり返す場所を調べる
  ////自分の隣が同じ色ならストップ
  ////自分の隣が違う色ならさらに隣を見て、自分と同じ色が出るまで確認
  ////確認した先で同じ色を見つけたらそこまでをひっくり返す
  //上下方向

  //左右方向

  //斜め方向


// if(boxs[index + 1].firstChild == null || boxs[index + 1].firstChild.classList.contains("white")) {
//   console.log('変化なし');
// }else{
//   console.log('正しくないからさらに右を見ます');
//   if(boxs[index + 2].firstChild.classList.contains("white")) {
//     console.log('自分の色で挟んでいるので挟んでいる色を変えます');
//     boxs[index + 1].firstChild.classList.remove("black");
//     boxs[index + 1].firstChild.classList.add("white");
//   }else{
//     console.log('正しくないからさらに右を見ます');
//     if(boxs[index + 3].firstChild.classList.contains("white")) {
//       console.log('自分の色で挟んでいるので挟んでいる色を変えます');
//       boxs[index + 1].firstChild.classList.remove("black");
//       boxs[index + 1].firstChild.classList.add("white");
//       boxs[index + 2].firstChild.classList.remove("black");
//       boxs[index + 2].firstChild.classList.add("white");
//     }else{
//       console.log('正しくないからさらに右を見ます');
      
//     }
//   }
// }