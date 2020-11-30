function hasCollided(a,b){
    bulletRightEdge = a.x + a.width;
    wallLeftEdge = b.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    else{
      return false;
    }
  
  }