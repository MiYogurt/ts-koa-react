import * as Koa from 'Koa';
import * as Router  from "koa-router";
import * as bodyParser from "koa-bodyparser";
import * as serve from "koa-static2";
import * as views from "koa-views";
import * as middleware from 'koa-webpack';
import * as config from '../../webpack.config.js';
import * as webpack from 'webpack';
import globalConfig from './config';

const app = new Koa();
const router = new Router();

const compile = webpack(config)

app.use(views(globalConfig.path.serverRootDir + '/views', {
    map: {
        html: 'nunjucks'
    }
}));

app.use(router.routes());
app.use(serve("assets", globalConfig.path.serverRootDir + "/assets"));
app.use(middleware({
	compile,
	config,
	dev: {
		noInfo: true,
        publicPath: config.output.publicPath,
        stats: {
            colors: true
        }
	},
	hot: {
		reload: true,
		overlay: false 
	}
}));
app.use(bodyParser());

router.get('/', async(ctx, next) => {
    return await ctx.render('index.html', {
        name: "Yugo"
    })
});

app.listen(3000, () => {
    console.log("server created at http://localhost:3000");
});