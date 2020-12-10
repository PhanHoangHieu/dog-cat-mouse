// git init
// git status
// git add
// git commit

// git log: xem lich su commit
// git show <commit code>: xem sự thay đổi của 1 commit bất kì
// git diff : xem sự thay đổi của những file đã update,nhưng file đươc thêm mới thì éo thể hiện

// working directory :không gian chứa các  file trước khi add
// staging area : không gian chứa các file sau khi add và sẵn sàng cho việc commit 
// git repository: lưu những thay đổi của commit(sau khi commit)

//git checkout -- <file> : loai bỏ thay đổi của 1 số file mà chưa  add lên staging 
//git reset HEAD <file> : unstage những file đã được add về trạng thái trước khi add

// git checkout -b <branch>: tạo nhánh mới và chuyển tới nhánh đó
// git checkout <branch>: chuyển tới nhánh 
// git merge : kép những thay đổi từ branch B vào branch A
A <---- B các bước merge
 + git checkout A
 + git merge B
master <----- feature/dog-class
// git branch -D <branch> : xóa branch


// ------- git reset --------
// git reset -- soft <to_commit> : quay về vị trí commit <to_commit> ,những thay đổi của các commit được commit sau <to_commit> sẽ được tự động add(ở trạng thái chờ commit)
// git reset -- mixed <to_commit>: quay về vị trí commit <to_commit> ,những thay đổi của các commit được commit sau <to_commit> sẽ không  tự động add(ở trạng thái chưa add những thay đổi muốn commit)
// git reset -- hard <to_commit>quay về vị trí commit <to_commit> ,những thay đổi của các commit được commit sau <to_commit> sẽ không  tự động tự động bị loại bỏ

// git revert <commit> : loại bỏ những thay đổi của 1 commit bất kì mà ko làm ảnh hưởng đến các commit khác => sinh ra 1 commit mới
(hạn chế sữ dụng)

// .gitignore: bỏ qua 1 số file mà bạn ko muốn commit