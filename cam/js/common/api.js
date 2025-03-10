window.__API = {

	/**
	 * 摄像机管理
	 * http://add.corp.qihoo.net/pages/viewpage.action?pageId=13783789
	 */
	refreshCover: 'https://live3.jia.360.cn/anchor/getNewCovers' 						//一键更新封面图
	, getCamaraInfo: 'https://live3.jia.360.cn/anchor/getPublicRelatedInfo'			//获取摄像机信息
	, getStat: 'https://live3.jia.360.cn/anchor/getPublicStatInfo'					//获取统计信息
	, updateCamaraInfo: 'https://live3.jia.360.cn/anchor/updatePublicRelatedInfo'		//修改摄像机信息
	, getFollowsInfo: 'https://live3.jia.360.cn/anchor/getFollowsInfo'		//获取粉丝信息

	, uploadSwf: '/resource/js/common/webuploader/Uploader.swf'
	, uploadCover: 'https://live3.jia.360.cn/anchor/uploadCoverImage'			//上传封面图片

	, getReplayList: 'https://live3.jia.360.cn/replay/getListV2'						//获取回放列表
	, getUploadToken: 'https://live3.jia.360.cn/replay/requestMultiUploadToken'			//获取上传回放授权信息
	, multiUploadCommit: 'https://live3.jia.360.cn/replay/multiUploadCommit'			//上传回放视频
	, uploadCommit: 'https://live3.jia.360.cn/replay/uploadCommit'			
	, updateReplayInfo: 'https://live3.jia.360.cn/replay/updateReplayInfo'
	, deleteReplay: 'https://live3.jia.360.cn/replay/deleteReplayInfo'

};