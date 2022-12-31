// https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp

const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function(req,res){

	if(req.url == '/fileupload'){
		const form = new formidable.IncomingForm();
		form.parse(req,function(err,fields,files){
			const oldpath=files.filetoupload.filepath;
			const newpath='G:\\Upload to Mail Drive\\node js matery\\File storage\\'+files.filetoupload.originalFilename;
			/*fs.rename(oldpath,newpath,function(err){
				if(err) throw err;
				res.write('File uploaded and moved');
				res.end();
			}); */
			
			fs.readFile(oldpath, function (err, data) {
            if (err) throw err;
            console.log('File read!');

            // Write the file
            fs.writeFile(newpath, data, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
                console.log('File written!');
            });

            // Delete the file
            fs.unlink(oldpath, function (err) {
                if (err) throw err;
                console.log('File deleted!');
            });
        });
		});
	}
	else{
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="filetoupload"><br>');
		res.write('<input type="submit">');
		res.write('</form>');
		return res.end();
	}

}).listen(8080);