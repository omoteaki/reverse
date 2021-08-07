window.addEventListener("load", () => {

  const boxs = document.querySelectorAll(".box");

  var colorA = "black";
  var colorB = "white";

  boxs.forEach((box, index) => {
    box.addEventListener('click', function(){
      console.log(index);
      const div = document.createElement('div');

      div.classList.add(colorA,'disc');
      box.appendChild(div);
      // reverseColor(index, colorA, colorB);
      if (reverseColorRight(index, colorA, colorB)
      && reverseColorLeft(index, colorA, colorB)
      && reverseColorUp(index, colorA, colorB)
      && reverseColorDown(index, colorA, colorB)
      && reverseColorRightDown(index, colorA, colorB)
      && reverseColorLeftDown(index, colorA, colorB)
      && reverseColorRightUp(index, colorA, colorB)
      && reverseColorLeftUp(index, colorA, colorB)
      ) {
        console.log("ひっくり返せないところには置けません");
        div.classList.remove(colorA,'disc');
        return;
      } else {
        reverseColorRight(index, colorA, colorB);
        reverseColorLeft(index, colorA, colorB);
        reverseColorUp(index, colorA, colorB);
        reverseColorDown(index, colorA, colorB);
        reverseColorRightDown(index, colorA, colorB);
        reverseColorLeftDown(index, colorA, colorB);
        reverseColorRightUp(index, colorA, colorB);
        reverseColorLeftUp(index, colorA, colorB);
      }
      [colorA, colorB] = [colorB, colorA];
    });
  });


  // const reverseColor = (index, colorA, colorB) => {
  // }

  //右方向
  function reverseColorRight (index, colorA, colorB) {
    var x = index % 8;

    // 隣に何もないor同じ色or枠だったら変更なし
    if(x >=6
      || !boxs[index + 1].hasChildNodes()
      || boxs[index + 1].firstChild.classList.contains(colorA))
    {
      // console.log('変更なし1');
      return true;
    } else {
      for(let i = 1; i < 7 - x; i++) {
        if (boxs[index + i + 1].hasChildNodes()
          && boxs[index + i + 1].firstChild.classList.contains(colorA)) {
          console.log('同じ色発見1');
          console.log(i);
          let j = 0;
          while(j < i) {
            j++;
            boxs[index + j].firstChild.classList.remove(colorB);
            boxs[index + j].firstChild.classList.add(colorA);
          }
          return false;
        }
      }
      // console.log('変更なし1-2')
      return true;
    }
  };

  //左方向
  function reverseColorLeft (index, colorA, colorB) {
    var x = index % 8;

    if (x <= 1
      || boxs[index - 1].firstChild == null
      || boxs[index - 1].firstChild.classList.contains(colorA))
    {
      // console.log('変更なし2');
      return true;
    } else {
      for(let i = 1; i < x; i++) {
        if (boxs[index - i - 1].firstChild != null
          && boxs[index - i - 1].firstChild.classList.contains(colorA)) {
          console.log('同じ色発見2');
          console.log(i);
          let j = 0;
          while(j < i) {
            j++;
            boxs[index - j].firstChild.classList.remove(colorB);
            boxs[index - j].firstChild.classList.add(colorA);
          }
          console.log(j);
          return false;
        }
      }
      // console.log('変更なし2-2')
      return true;
    }
  };

  //上方向
  function reverseColorUp (index, colorA, colorB) {
    if (index < 16
      || boxs[index - 8].firstChild == null
      || boxs[index - 8].firstChild.classList.contains(colorA))
    {
      // console.log('変更なし3');
      return true;
    } else {
      for(let i = 1; i * 8 <= index ; i++) {
        if (boxs[index - (i + 1) * 8].firstChild == null) {
          // console.log('変更なし3-3');
          return true;
        }
        else if (boxs[index - (i + 1) * 8].firstChild.classList.contains(colorA)) {
          console.log('同じ色発見3');
          console.log(i);
          let j = 0;
          while(j < i) {
            j++;
            boxs[index - j * 8].firstChild.classList.remove(colorB);
            boxs[index - j * 8].firstChild.classList.add(colorA);
          }
          console.log(j);
          return false;
        }
      }
      // console.log('変更なし3-2')
      return true;
    }
  };

  //下方向
  function reverseColorDown (index, colorA, colorB) {
    if (index >= 48
      || boxs[index + 8].firstChild == null
      || boxs[index + 8].firstChild.classList.contains(colorA))
    {
      // console.log('変更なし4');
      return true;
    } else {
      for(let i = 1; i * 8 <= 63 - index ; i++) {
        if (boxs[index + (i + 1) * 8].firstChild == null) {
          // console.log('変更なし4-3');
          return true;
        }
        else if (boxs[index + (i + 1) * 8].firstChild.classList.contains(colorA)) {
          console.log('同じ色発見4');
          console.log(i);
          let j = 0;
          while(j < i) {
            j++;
            boxs[index + j * 8].firstChild.classList.remove(colorB);
            boxs[index + j * 8].firstChild.classList.add(colorA);
          }
          console.log(j);
          return false;
        }
      }
      // console.log('変更なし4-2')
      return true;
    }
  };

  //右下方向
  function reverseColorRightDown (index, colorA, colorB) {
    var x = index % 8;

    if (index >= 48 || x >=6
      || boxs[index + 8 + 1].firstChild == null
      || boxs[index + 8 + 1].firstChild.classList.contains(colorA))
    {
      // console.log('変更なし5');
      return true;
    } else {
      for(let i = 1; i < 7 - x; i++) {
        if (boxs[index + (i + 1) * 8 + (i + 1)].firstChild == null) {
          // console.log('変更なし5-3');
          return true;
        }
        else if (boxs[index + (i + 1) * 8 + (i + 1)].firstChild.classList.contains(colorA)) {
          console.log('同じ色発見5');
          console.log(i);
          let j = 0;
          while(j < i) {
            j++;
            boxs[index + j * 8 + j].firstChild.classList.remove(colorB);
            boxs[index + j * 8 + j].firstChild.classList.add(colorA);
          }
          console.log(j);
          return false;
        }
      }
      // console.log('変更なし5-2')
      return true;
    }
  };

  //左下方向
  function reverseColorLeftDown (index, colorA, colorB) {
    var x = index % 8;

    if (index >= 48 || x <= 1
      || boxs[index + 8 - 1].firstChild == null
      || boxs[index + 8 - 1].firstChild.classList.contains(colorA))
    {
      // console.log('変更なし6');
      return true;
    } else {
      for(let i = 1; i < x; i++) {
        if (!boxs[index + (i + 1) * 8 - (i + 1)].hasChildNodes()) {
          // console.log('変更なし6-3');
          return true;
        }
        else if (boxs[index + (i + 1) * 8 - (i + 1)].firstChild.classList.contains(colorA)) {
          console.log('同じ色発見6');
          console.log(i);
          let j = 0;
          while(j < i) {
            j++;
            boxs[index + j * 8 - j].firstChild.classList.remove(colorB);
            boxs[index + j * 8 - j].firstChild.classList.add(colorA);
          }
          console.log(j);
          return false;
        }
      }
      // console.log('変更なし6-2')
      return true;
    }
  };

  //右上方向
  function reverseColorRightUp (index, colorA, colorB) {
    var x = index % 8;

    if (index < 16 || x >=6
      || boxs[index - 8 + 1].firstChild == null
      || boxs[index - 8 + 1].firstChild.classList.contains(colorA))
    {
      console.log('変更なし7');
      return true;
    } else {
      for(let i = 1; i < 7 - x; i++) {
        if (!boxs[index - (i + 1) * 8 + (i + 1)].hasChildNodes()) {
          console.log('変更なし7-3');
          return true;
        }
        else if (boxs[index - (i + 1) * 8 + (i + 1)].firstChild.classList.contains(colorA)) {
          console.log('同じ色発見7');
          console.log(i);
          let j = 0;
          while(j < i) {
            j++;
            boxs[index - j * 8 + j].firstChild.classList.remove(colorB);
            boxs[index - j * 8 + j].firstChild.classList.add(colorA);
          }
          console.log(j);
          return false;
        }
      }
      console.log('変更なし7-2')
      return true;
    }
  };

  //左上方向
  function reverseColorLeftUp (index, colorA, colorB) {
    var x = index % 8;

    if (index < 16 || x <= 1
      || boxs[index - 8 - 1].firstChild == null
      || boxs[index - 8 - 1].firstChild.classList.contains(colorA))
    {
      // console.log('変更なし8');
      return true;
    } else {
      for(let i = 1; i < x; i++) {
        if (boxs[index - (i + 1) * 8 - (i + 1)].firstChild == null) {
          // console.log('変更なし8-3');
          return true;
        }
        else if (boxs[index - (i + 1) * 8 - (i + 1)].firstChild.classList.contains(colorA)) {
          console.log('同じ色発見8');
          console.log(i);
          let j = 0;
          while(j < i) {
            j++;
            boxs[index - j * 8 - j].firstChild.classList.remove(colorB);
            boxs[index - j * 8 - j].firstChild.classList.add(colorA);
          }
          console.log(j);
          return false;
        }
      }
      // console.log('変更なし8-2')
      return true;
    }
  };


});
