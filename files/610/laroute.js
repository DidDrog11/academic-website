(function () {

    var laroute = (function () {

        var routes = {

            absolute: true,
            rootUrl: 'https://www.qeios.com',
            routes : [{"host":null,"methods":["GET","POST","HEAD"],"uri":"broadcasting\/auth","name":null,"action":"\Illuminate\Broadcasting\BroadcastController@authenticate"},{"host":null,"methods":["GET","HEAD"],"uri":"terms","name":"terms","action":"\Illuminate\Routing\ViewController"},{"host":null,"methods":["GET","HEAD"],"uri":"privacy","name":"privacy_policy","action":"\Illuminate\Routing\ViewController"},{"host":null,"methods":["GET","HEAD"],"uri":"publishing-policy","name":"publishing_policy","action":"\Illuminate\Routing\ViewController"},{"host":null,"methods":["GET","HEAD"],"uri":"conduct-policy","name":"conduct_policy","action":"\Illuminate\Routing\ViewController"},{"host":null,"methods":["GET","HEAD"],"uri":"about","name":"about","action":"\Illuminate\Routing\ViewController"},{"host":null,"methods":["GET","HEAD"],"uri":"about#advisory-board","name":"advisory_board","action":"\Illuminate\Routing\ViewController"},{"host":null,"methods":["GET","HEAD"],"uri":"membership","name":"membership","action":"\Illuminate\Routing\ViewController"},{"host":null,"methods":["GET","HEAD"],"uri":"how-it-works","name":"how_it_works","action":"\Illuminate\Routing\ViewController"},{"host":null,"methods":["GET","HEAD"],"uri":"publishing","name":"site_teaser.generic","action":"\Illuminate\Routing\ViewController"},{"host":null,"methods":["GET","HEAD"],"uri":"teaser\/definitions","name":"site_teaser.definitions_tobacco","action":"\Illuminate\Routing\ViewController"},{"host":null,"methods":["GET","HEAD"],"uri":"discover","name":"discover","action":"App\Http\Controllers\Web\DiscoverPageController"},{"host":null,"methods":["GET","HEAD"],"uri":"archive\/{year?}","name":"archive","action":"App\Http\Controllers\Web\ArchivePageController"},{"host":null,"methods":["GET","HEAD"],"uri":"login","name":"login","action":"App\Http\Controllers\Web\Auth\LoginController@showLoginForm"},{"host":null,"methods":["POST"],"uri":"login","name":null,"action":"App\Http\Controllers\Web\Auth\LoginController@login"},{"host":null,"methods":["POST"],"uri":"logout","name":"logout","action":"App\Http\Controllers\Web\Auth\LoginController@logout"},{"host":null,"methods":["GET","HEAD"],"uri":"register","name":"register","action":"App\Http\Controllers\Web\Auth\RegisterController@showRegistrationChoice"},{"host":null,"methods":["GET","HEAD"],"uri":"register\/researcher","name":"register.researcher","action":"App\Http\Controllers\Web\Auth\RegisterController@showResearcherRegistrationForm"},{"host":null,"methods":["POST"],"uri":"register\/researcher","name":"register.researcher","action":"App\Http\Controllers\Web\Auth\RegisterController@registerResearcher"},{"host":null,"methods":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS"],"uri":"register\/form\/researcher","name":null,"action":"\Illuminate\Routing\RedirectController"},{"host":null,"methods":["GET","HEAD"],"uri":"register\/observer","name":"register.observer","action":"App\Http\Controllers\Web\Auth\RegisterController@showObserverRegistrationForm"},{"host":null,"methods":["POST"],"uri":"register\/observer","name":"register.observer","action":"App\Http\Controllers\Web\Auth\RegisterController@registerObserver"},{"host":null,"methods":["POST"],"uri":"register\/presave-orcid-lacks","name":"register.presave_orcid_lacks","action":"App\Http\Controllers\Web\Auth\RegisterController@presaveOrcidLacks"},{"host":null,"methods":["GET","HEAD"],"uri":"register\/verification-email-sent","name":"register.verification_email_sent","action":"App\Http\Controllers\Web\Auth\RegisterController@showVerificationEmailSent"},{"host":null,"methods":["GET","HEAD"],"uri":"register\/change-email","name":"register.change_email","action":"App\Http\Controllers\Web\Auth\ChangeEmailController@showForm"},{"host":null,"methods":["POST"],"uri":"register\/change-email","name":"register.change_email","action":"App\Http\Controllers\Web\Auth\ChangeEmailController@change"},{"host":null,"methods":["GET","HEAD"],"uri":"verifyemail\/{token}","name":"email.verify","action":"App\Http\Controllers\Web\Auth\RegisterController@verify"},{"host":null,"methods":["POST"],"uri":"resend-verification-email","name":"email.verify.resend","action":"App\Http\Controllers\Web\Auth\RegisterController@resendVerificationEmail"},{"host":null,"methods":["GET","HEAD"],"uri":"password\/reset","name":"password.request","action":"App\Http\Controllers\Web\Auth\PasswordReset\RequestLinkController@showLinkRequestForm"},{"host":null,"methods":["POST"],"uri":"password\/email","name":"password.email","action":"App\Http\Controllers\Web\Auth\PasswordReset\RequestLinkController@sendResetLinkEmail"},{"host":null,"methods":["GET","HEAD"],"uri":"password\/reset\/{token}\/{email}","name":"password.reset","action":"App\Http\Controllers\Web\Auth\PasswordReset\ResetPasswordController@showResetForm"},{"host":null,"methods":["POST"],"uri":"password\/reset","name":null,"action":"App\Http\Controllers\Web\Auth\PasswordReset\ResetPasswordController@reset"},{"host":null,"methods":["GET","HEAD"],"uri":"orcid\/authorize","name":"orcid.authorize","action":"App\Http\Controllers\Web\OrcidAuthorizationController@redirectToOrcidAuthorization"},{"host":null,"methods":["GET","HEAD"],"uri":"orcid\/authorization-completed","name":"orcid.authorization_completed","action":"App\Http\Controllers\Web\OrcidAuthorizationController@handleAuthorizationCompleted"},{"host":null,"methods":["GET","HEAD"],"uri":"\/","name":"home","action":"App\Http\Controllers\Web\HomePageController"},{"host":null,"methods":["GET","HEAD"],"uri":"invitation-to-join\/researcher\/{inviter}","name":"invitation_to_join.researcher","action":"App\Http\Controllers\Web\InvitationToJoinController@showResearcherInvitation"},{"host":null,"methods":["GET","HEAD"],"uri":"definitions\/get-confirmed","name":"definitions.get_confirmed","action":"App\Http\Controllers\Web\DefinitionsController@getConfirmed"},{"host":null,"methods":["GET","HEAD"],"uri":"definitions\/get-clusters","name":"definitions.get_clusters","action":"App\Http\Controllers\Web\DefinitionsController@getClusters"},{"host":null,"methods":["POST"],"uri":"definitions\/relate\/{definition}\/{cluster?}","name":"definitions.relate","action":"App\Http\Controllers\Web\DefinitionsController@relateDefinition"},{"host":null,"methods":["GET","HEAD"],"uri":"relate-suggestions\/{publication}","name":"relate_suggestions","action":"App\Http\Controllers\Web\RelateSuggestionController@getSuggestions"},{"host":null,"methods":["GET","HEAD"],"uri":"profile\/{user?}","name":"profile","action":"App\Http\Controllers\Web\ProfileController@showProfile"},{"host":null,"methods":["GET","HEAD"],"uri":"profile\/{user}\/followers","name":"profile.followers","action":"App\Http\Controllers\Web\ProfileController@showFollowers"},{"host":null,"methods":["GET","HEAD"],"uri":"profile\/{user}\/following","name":"profile.following","action":"App\Http\Controllers\Web\ProfileController@showFollowing"},{"host":null,"methods":["GET","HEAD"],"uri":"my-membership","name":"my_membership","action":"App\Http\Controllers\Web\MyMembershipPageController"},{"host":null,"methods":["GET","HEAD"],"uri":"settings\/account","name":"settings.account","action":"App\Http\Controllers\Web\AccountController@showSettings"},{"host":null,"methods":["POST"],"uri":"settings\/account\/save","name":"settings.account.save","action":"App\Http\Controllers\Web\AccountController@changeSettings"},{"host":null,"methods":["GET","HEAD"],"uri":"settings\/notification","name":"settings.notification","action":"App\Http\Controllers\Web\NotificationSettingsController@showSettings"},{"host":null,"methods":["POST"],"uri":"settings\/notification\/save","name":"settings.notification.save","action":"App\Http\Controllers\Web\NotificationSettingsController@changeSettings"},{"host":null,"methods":["POST"],"uri":"settings\/notification\/answer-to-newsletter-proposal","name":"settings.notification.answer_to_newsletter_proposal","action":"App\Http\Controllers\Web\NotificationSettingsController@answerToNewsletterProposal"},{"host":null,"methods":["GET","HEAD"],"uri":"email-unsubscribe\/authoring-request\/{user}","name":"email_unsubscribe.authoring_request","action":"App\Http\Controllers\Web\EmailUnsubscribeController@stopAuthoringRequestEmails"},{"host":null,"methods":["GET","HEAD"],"uri":"email-unsubscribe\/invitation\/{user}","name":"email_unsubscribe.invitation","action":"App\Http\Controllers\Web\EmailUnsubscribeController@stopInvitationEmails"},{"host":null,"methods":["GET","HEAD"],"uri":"email-unsubscribe\/activity\/{user}","name":"email_unsubscribe.activity","action":"App\Http\Controllers\Web\EmailUnsubscribeController@stopActivityEmails"},{"host":null,"methods":["POST"],"uri":"change-email\/send","name":"change_email.send","action":"App\Http\Controllers\Web\ChangeEmailController@sendVerification"},{"host":null,"methods":["GET","HEAD"],"uri":"change-email\/verify\/{token}","name":"change_email.verify","action":"App\Http\Controllers\Web\ChangeEmailController@change"},{"host":null,"methods":["POST"],"uri":"profile\/{user}\/add-avatar","name":"avatar.add","action":"App\Http\Controllers\Web\AvatarController@store"},{"host":null,"methods":["POST"],"uri":"profile\/{user}\/remove-avatar","name":"avatar.remove","action":"App\Http\Controllers\Web\AvatarController@remove"},{"host":null,"methods":["GET","HEAD"],"uri":"compose\/new-definition","name":"compose.new_definition","action":"App\Http\Controllers\Web\AuthoringPageController@newDefinition"},{"host":null,"methods":["GET","HEAD"],"uri":"compose\/new-article","name":"compose.new_article","action":"App\Http\Controllers\Web\AuthoringPageController@newArticle"},{"host":null,"methods":["GET","HEAD"],"uri":"compose\/new-review","name":"compose.new_review","action":"App\Http\Controllers\Web\AuthoringPageController@newReview"},{"host":null,"methods":["GET","HEAD"],"uri":"compose\/edit\/{publication}","name":"compose.edit","action":"App\Http\Controllers\Web\AuthoringPageController@editPublication"},{"host":null,"methods":["GET","HEAD"],"uri":"compose\/drafts\/{type?}","name":"compose.drafts","action":"App\Http\Controllers\Web\DraftsPageController"},{"host":null,"methods":["POST"],"uri":"compose\/remove-authors\/{publication}","name":"compose.remove_authors","action":"App\Http\Controllers\Web\AuthorController@removeAuthors"},{"host":null,"methods":["POST"],"uri":"compose\/give-administration\/{publication}\/{receiver}","name":"compose.give_administration","action":"App\Http\Controllers\Web\AuthorController@giveAdministratorRole"},{"host":null,"methods":["POST"],"uri":"compose\/{publication}\/add-tag\/{tagName}","name":"compose.add_tag","action":"App\Http\Controllers\Web\PublicationTagController@addTag"},{"host":null,"methods":["POST"],"uri":"compose\/{publication}\/remove-tag","name":"compose.remove_tag","action":"App\Http\Controllers\Web\PublicationTagController@removeTag"},{"host":null,"methods":["POST"],"uri":"compose\/get-online-writer\/{publication}","name":"get_online_writer","action":"App\Http\Controllers\Web\OnlineWriterController@getOnlineWriter"},{"host":null,"methods":["POST"],"uri":"compose\/mark-presence\/{publication}","name":"compose.mark_presence","action":"App\Http\Controllers\Web\OnlineWriterController@markPresence"},{"host":null,"methods":["GET","HEAD"],"uri":"search-tags\/{publicationType}","name":"compose.search_tags","action":"App\Http\Controllers\Web\SearchTagsController@search"},{"host":null,"methods":["GET","HEAD"],"uri":"read\/{publication}","name":"read","action":"App\Http\Controllers\Web\ReadController@showReadPage"},{"host":null,"methods":["GET","HEAD"],"uri":"read\/{publication}\/pdf","name":"read.pdf","action":"App\Http\Controllers\Web\ReadController@showPdf"},{"host":null,"methods":["GET","HEAD"],"uri":"read\/article\/{article}","name":null,"action":"App\Http\Controllers\Web\ReadController@redirectToReadPageForArticle"},{"host":null,"methods":["GET","HEAD"],"uri":"read\/definition\/{definition}","name":null,"action":"App\Http\Controllers\Web\ReadController@redirectToReadPageForDefinition"},{"host":null,"methods":["GET","HEAD"],"uri":"read\/review\/{review}","name":null,"action":"App\Http\Controllers\Web\ReadController@redirectToReadPageForReview"},{"host":null,"methods":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS"],"uri":"follow\/user\/{user}","name":"follow.user","action":"App\Http\Controllers\Web\FollowController@followUser"},{"host":null,"methods":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS"],"uri":"follow\/definition-tag\/{tag}","name":"follow.definition_tag","action":"App\Http\Controllers\Web\FollowController@followDefinitionTag"},{"host":null,"methods":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS"],"uri":"follow\/article-tag\/{tag}","name":"follow.article_tag","action":"App\Http\Controllers\Web\FollowController@followArticleTag"},{"host":null,"methods":["POST"],"uri":"unfollow\/user\/{user}","name":"unfollow.user","action":"App\Http\Controllers\Web\FollowController@unfollowUser"},{"host":null,"methods":["POST"],"uri":"unfollow\/definition-tag\/{tag}","name":"unfollow.definition_tag","action":"App\Http\Controllers\Web\FollowController@unfollowDefinitionTag"},{"host":null,"methods":["POST"],"uri":"unfollow\/article-tag\/{tag}","name":"unfollow.article_tag","action":"App\Http\Controllers\Web\FollowController@unfollowArticleTag"},{"host":null,"methods":["GET","HEAD"],"uri":"search","name":"search_on_qeios","action":"App\Http\Controllers\Web\SearchOnQeiosController@showSearchPage"},{"host":null,"methods":["GET","HEAD"],"uri":"topic\/articles\/{tagName}","name":"topic.article","action":"App\Http\Controllers\Web\TopicController@showArticleTagPage"},{"host":null,"methods":["GET","HEAD"],"uri":"topic\/definitions\/{tagName}","name":"topic.definition","action":"App\Http\Controllers\Web\TopicController@showDefinitionTagPage"},{"host":null,"methods":["GET","HEAD"],"uri":"activity","name":"activity","action":"App\Http\Controllers\Web\ActivityController@showActivityPage"},{"host":null,"methods":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS"],"uri":"authoring-requests\/{authoringRequest}\/approve","name":"authoring_request.approve","action":"App\Http\Controllers\Web\RespondToAuthoringRequestController@approve"},{"host":null,"methods":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS"],"uri":"authoring-requests\/{authoringRequest}\/deny","name":"authoring_request.deny","action":"App\Http\Controllers\Web\RespondToAuthoringRequestController@deny"},{"host":null,"methods":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS"],"uri":"claiming\/{invitation}\/accept","name":"claiming_invitation.accept","action":"App\Http\Controllers\Web\AnswerToClaimingInvitationController@accept"},{"host":null,"methods":["GET","HEAD","POST","PUT","PATCH","DELETE","OPTIONS"],"uri":"claiming\/{invitation}\/decline","name":"claiming_invitation.decline","action":"App\Http\Controllers\Web\AnswerToClaimingInvitationController@decline"},{"host":null,"methods":["GET","HEAD"],"uri":"reference\/search","name":"reference.search_qeios","action":"App\Http\Controllers\Web\SearchPublicationToReferenceController"},{"host":null,"methods":["POST"],"uri":"upload\/image","name":"upload.image","action":"App\Http\Controllers\Web\FileController@uploadImage"},{"host":null,"methods":["GET","HEAD"],"uri":"admin","name":"super_admin.","action":"\Illuminate\Routing\ViewController"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/users\/researcher-creation","name":"super_admin.researcher_creation","action":"App\Http\Controllers\Web\SuperAdmin\ResearcherCreationPageController@show"},{"host":null,"methods":["POST"],"uri":"admin\/users\/researcher-creation\/create","name":"super_admin.researcher_creation.create","action":"App\Http\Controllers\Web\SuperAdmin\ResearcherCreationPageController@create"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/users\/verified-researchers","name":"super_admin.verified_researchers","action":"App\Http\Controllers\Web\SuperAdmin\VerifiedResearcherPageController"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/users\/unverified-researchers","name":"super_admin.unverified_researchers","action":"App\Http\Controllers\Web\SuperAdmin\UnverifiedResearcherPageController"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/publications\/high-quality","name":"super_admin.publications.high_quality","action":"App\Http\Controllers\Web\SuperAdmin\HighQualityPublicationPageController@show"},{"host":null,"methods":["POST"],"uri":"admin\/publications\/mark-as-high-quality","name":"super_admin.publications.mark_as_high_quality","action":"App\Http\Controllers\Web\SuperAdmin\HighQualityPublicationPageController@markAsHighQuality"},{"host":null,"methods":["POST"],"uri":"admin\/publications\/unmark-as-high-quality","name":"super_admin.publications.unmark_as_high_quality","action":"App\Http\Controllers\Web\SuperAdmin\HighQualityPublicationPageController@unmarkAsHighQuality"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/publications\/unpublished","name":"super_admin.publications.unpublished","action":"App\Http\Controllers\Web\SuperAdmin\UnpublishedPublicationPageController"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/publications\/retraction","name":"super_admin.publications.retraction","action":"App\Http\Controllers\Web\SuperAdmin\PublicationRetractionController@showPage"},{"host":null,"methods":["POST"],"uri":"admin\/publications\/retraction","name":"super_admin.","action":"App\Http\Controllers\Web\SuperAdmin\PublicationRetractionController@retract"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/echo-definitions-mass-upload","name":"super_admin.echo_definitions_mass_upload","action":"App\Http\Controllers\Web\SuperAdmin\EchoDefinitionMassUpload\Controller@showPage"},{"host":null,"methods":["POST"],"uri":"admin\/echo-definitions-mass-upload","name":"super_admin.","action":"App\Http\Controllers\Web\SuperAdmin\EchoDefinitionMassUpload\Controller@createAndPublish"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/research-institutions\/creation","name":"super_admin.research_institutions.creation","action":"App\Http\Controllers\Web\SuperAdmin\ResearchInstitutionPageController"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/users","name":null,"action":"App\Http\Controllers\Api\UserController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/users\/{user}","name":null,"action":"App\Http\Controllers\Api\UserController@getUser"},{"host":null,"methods":["PUT"],"uri":"api\/users\/{user}\/profile","name":null,"action":"App\Http\Controllers\Api\UpdateUserProfileController"},{"host":null,"methods":["POST"],"uri":"api\/users\/{user}\/deactivation","name":null,"action":"App\Http\Controllers\Api\DeactivateUserController"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/users\/{user}\/bookmarks","name":null,"action":"App\Http\Controllers\Api\UserBookmarkController@index"},{"host":null,"methods":["PUT"],"uri":"api\/users\/{user}\/bookmarks\/{publication}","name":null,"action":"App\Http\Controllers\Api\UserBookmarkController@store"},{"host":null,"methods":["DELETE"],"uri":"api\/users\/{user}\/bookmarks\/{publication}","name":null,"action":"App\Http\Controllers\Api\UserBookmarkController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/users\/{user}\/followers","name":null,"action":"App\Http\Controllers\Api\UserFollowController@indexFollowers"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/users\/{user}\/followings","name":null,"action":"App\Http\Controllers\Api\UserFollowController@indexFollowings"},{"host":null,"methods":["DELETE"],"uri":"api\/users\/me\/orcid-id","name":null,"action":"App\Http\Controllers\Api\UserOrcidIdController@unlink"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/home-feed","name":null,"action":"App\Http\Controllers\Api\HomeFeedController@indexFeed"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/home-feed\/publication-suggestions","name":null,"action":"App\Http\Controllers\Api\HomeFeedController@indexSuggestions"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/home-feed\/researcher-suggestions","name":null,"action":"App\Http\Controllers\Api\HomeFeedController@indexResearcherSuggestions"},{"host":null,"methods":["POST"],"uri":"api\/articles","name":null,"action":"App\Http\Controllers\Api\Publications\Publication\StoreController@newArticle"},{"host":null,"methods":["POST"],"uri":"api\/definitions","name":null,"action":"App\Http\Controllers\Api\Publications\Publication\StoreController@newDefinition"},{"host":null,"methods":["POST"],"uri":"api\/reviews","name":null,"action":"App\Http\Controllers\Api\Publications\Publication\StoreController@newReview"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/published-definitions","name":null,"action":"App\Http\Controllers\Api\Publications\Publication\GetController@searchPublishedDefinitions"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/publications\/{publication}","name":null,"action":"App\Http\Controllers\Api\Publications\Publication\GetController@getPublication"},{"host":null,"methods":["PUT"],"uri":"api\/publications\/{publication}","name":null,"action":"App\Http\Controllers\Api\Publications\Publication\UpdateController"},{"host":null,"methods":["DELETE"],"uri":"api\/publications\/{publication}","name":null,"action":"App\Http\Controllers\Api\Publications\Publication\DeleteController"},{"host":null,"methods":["POST"],"uri":"api\/publications\/{publication}\/authoring-requests","name":null,"action":"App\Http\Controllers\Api\Publications\AuthoringRequestController@send"},{"host":null,"methods":["PUT"],"uri":"api\/publications\/{publication}\/vacant-authors","name":null,"action":"App\Http\Controllers\Api\Publications\VacantAuthorController@update"},{"host":null,"methods":["POST"],"uri":"api\/publications\/{publication}\/preview-image","name":null,"action":"App\Http\Controllers\Api\Publications\PreviewImageController@update"},{"host":null,"methods":["DELETE"],"uri":"api\/publications\/{publication}\/preview-image","name":null,"action":"App\Http\Controllers\Api\Publications\PreviewImageController@delete"},{"host":null,"methods":["POST"],"uri":"api\/publications\/{publication}\/author-reordering","name":null,"action":"App\Http\Controllers\Api\Publications\AuthorReorderingController@moveAuthor"},{"host":null,"methods":["PUT"],"uri":"api\/publications\/{publication}\/declarations","name":null,"action":"App\Http\Controllers\Api\Publications\UpdateDeclarationController"},{"host":null,"methods":["PATCH"],"uri":"api\/publications\/{publication}\/license","name":null,"action":"App\Http\Controllers\Api\Publications\LicenseController@update"},{"host":null,"methods":["POST"],"uri":"api\/publications\/{publication}\/ancillary-files","name":null,"action":"App\Http\Controllers\Api\Publications\AncillaryFile\StoreController"},{"host":null,"methods":["POST"],"uri":"api\/publications\/{publication}\/confirm","name":null,"action":"App\Http\Controllers\Api\Publications\ConfirmController"},{"host":null,"methods":["POST"],"uri":"api\/publications\/{publication}\/publish","name":null,"action":"App\Http\Controllers\Api\Publications\PublishController"},{"host":null,"methods":["POST"],"uri":"api\/publications\/{publication}\/quit","name":null,"action":"App\Http\Controllers\Api\Publications\QuitController"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/publications\/{publication}\/version-history","name":null,"action":"App\Http\Controllers\Api\Publications\GetVersionHistoryController"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/publications\/{publication}\/all-versions-ratings","name":null,"action":"App\Http\Controllers\Api\Publications\RatingController@indexAllVersionsRatings"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/publications\/{publication}\/published-reviews","name":null,"action":"App\Http\Controllers\Api\Publications\IndexReviewController@publishedReviews"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/publications\/{publication}\/published-reviews-to-other-versions","name":null,"action":"App\Http\Controllers\Api\Publications\IndexReviewController@publishedReviewsToOtherVersions"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/publications\/{publication}\/works-using","name":null,"action":"App\Http\Controllers\Api\Publications\WorkUsingController@indexWorksUsingSpecificVersion"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/publications\/{publication}\/works-using-any-version","name":null,"action":"App\Http\Controllers\Api\Publications\WorkUsingController@indexWorksUsingAnyVersion"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/authoring-requests\/{authoringRequest}","name":null,"action":"App\Http\Controllers\Api\GetAuthoringRequestController"},{"host":null,"methods":["DELETE"],"uri":"api\/publication-ancillary-files\/{ancillaryFile}","name":null,"action":"App\Http\Controllers\Api\Publications\AncillaryFile\DeleteController"},{"host":null,"methods":["PUT"],"uri":"api\/reviews\/{review}\/reviewable","name":null,"action":"App\Http\Controllers\Api\ReviewableUpdateController"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/reviews\/{review}\/comments","name":null,"action":"App\Http\Controllers\Api\ReviewCommentController@index"},{"host":null,"methods":["POST"],"uri":"api\/reviews\/{review}\/comments","name":null,"action":"App\Http\Controllers\Api\ReviewCommentController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/research-fields","name":null,"action":"App\Http\Controllers\Api\ResearchFieldController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/research-institutions","name":null,"action":"App\Http\Controllers\Api\ResearchInstitutionController@index"},{"host":null,"methods":["POST"],"uri":"api\/research-institutions","name":null,"action":"App\Http\Controllers\Api\ResearchInstitutionController@store"},{"host":null,"methods":["POST"],"uri":"api\/reports","name":null,"action":"App\Http\Controllers\Api\ReportController@send"},{"host":null,"methods":["PUT"],"uri":"api\/labarchives\/authenticate","name":null,"action":"App\Http\Controllers\Api\LabArchivesController@authenticate"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/labarchives\/my-images","name":null,"action":"App\Http\Controllers\Api\LabArchivesController@indexImages"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/labarchives\/attachments\/{id}","name":null,"action":"App\Http\Controllers\Api\LabArchivesController@showAttachment"}],
            prefix: '',

            route : function (name, parameters, route) {
                route = route || this.getByName(name);

                if ( ! route ) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute : function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs  = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)){
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function (route){
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters : function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function(match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString : function (parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName : function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction : function(action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if ( ! this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function(attributes) {
            if ( ! attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function (url, title, attributes) {
            title      = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // laroute.action('HomeController@getIndex', [params = {}])
            action : function (name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // laroute.route('routeName', [params = {}])
            route : function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // laroute.route('url', [params = {}])
            url : function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // laroute.link_to('foo/bar', [title = url], [attributes = {}])
            link_to : function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // laroute.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route : function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // laroute.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action : function(action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };

    }).call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return laroute;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = laroute;
    }
    else {
        window.laroute = laroute;
    }

}).call(this);

