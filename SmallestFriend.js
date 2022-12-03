function tinyFriend(friendNames){
    let maxNameLength = 999;
    var tinyFriendName = [];
    if(friendNames==null){
        return -1;
    }
    else{
        for(var i=0;i<friendNames.length;i++)
        {
            if(maxNameLength>=friendNames[i].length)
            {
                maxNameLength = friendNames[i].length;
                tinyFriendName.push(friendNames[i]);
            }
        }
        return tinyFriendName;
    }    
}



var namesOfFriends = ['Rafa','Rime','Rafee','Zahra','Bushra','Maruful Haque']
console.log('Friend having the smallest name is:',tinyFriend(namesOfFriends));