let  budget = prompt("Enter your budget (low,high):")
let os = prompt("Enter your preferred Operating System (Android, iOS):")
let camera = prompt("Enter your desired Camera Quality (basic,high):")
let battery = prompt("Enter your preferred Battery Life (short,long):")
let screen = prompt("Enter your preferred Screen Size (small, large):")
if (budget==="low") {
    if (os==="Android") {
        if (camera==="basic") {
            if (battery==="short") 
                if (screen==="small") {
                    
                }
            
            }
        }
        document.write("samsung A05")
    }
    if (budget==="high") {
        if (os==="Android") {
            if (camera==="high") {
                if (battery==="long") 
                    if (screen==="large") {
                    }
            
                }
            }
            document.write("samsung A32")
        }
        if (budget==="high") {
            if (os==="ios") {
                if (camera==="high") {
                    if (battery==="long") 
                        if (screen==="large") {
                        }
                
                    }
                }
                document.write("iphone 14 pro max")
            }
            if (budget==="low") {
                if (os==="ios") {
                    if (camera==="basic") {
                        if (battery==="short") 
                            if (screen==="small") {
                                
                            }
                        
                        }
                    }
                    document.write("iphone x")
                }
                else{
                    document.write("Sorry I can not find any phone ")
                }
            