/**
 * ckeditor config.js file is not able to be uploaded to github due to the gitignore statement. pls rename this config_ckeditor.js file to config.js file to make the function work. // billy
 * config.image_previewText='图片预览'; //预览区域显示内容
 * config.filebrowserImageUploadUrl = "tempfolder/imageUpload.do";    // 上传图片路径
 * config.filebrowserImageUploadUrl = "admin/UserArticleFileUpload.do"; //待会要上传的action或servlet
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'document', 'doctools', 'mode' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] }
	];

    config.filebrowserImageUploadUrl = "/uploadFile";    // 上传图片路径
	config.removeDialogTabs = 'image:advanced;link:advanced';
	config.removeButtons = 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Subscript,Superscript,CreateDiv,Language,BidiRtl,BidiLtr,Iframe,Maximize,ShowBlocks,About';
};